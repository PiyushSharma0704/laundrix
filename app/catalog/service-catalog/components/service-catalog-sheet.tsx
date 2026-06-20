"use client";

import { ReactNode, useEffect, useState } from "react";

import { toast } from "sonner";

import { ServiceCatalogItem, PricingUnit } from "@/lib/types";

import { serviceCatalogService } from "@/lib/api/service-catalog.service";
import { ApiError } from "@/lib/api/api-client";

import { useServiceTypes } from "@/hooks/useServiceTypes";
import { useGarmentTypes } from "@/hooks/useGarmentTypes";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import ServiceCatalogForm from "./service-catalog-form";

import {
  serviceCatalogSchema,
  ServiceCatalogFormInputs,
} from "@/utils/formSchemas/service-form-schema";

type Mode = "create" | "edit" | "view";

interface ServiceCatalogSheetProps {
  mode: Mode;
  item?: ServiceCatalogItem;
  trigger: ReactNode;
  onSuccess?: () => void;
}

export default function ServiceCatalogSheet({
  mode,
  item,
  trigger,
  onSuccess,
}: ServiceCatalogSheetProps) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { serviceTypes } = useServiceTypes();
  const { garmentTypes } = useGarmentTypes();

  const form = useForm<ServiceCatalogFormInputs>({
    resolver: zodResolver(serviceCatalogSchema),

    defaultValues: {
      serviceTypeId: "",
      garmentTypeId: "",
      code: "",
      description: "",
      pricingUnit: PricingUnit.PIECE,
      basePrice: undefined,
      minimumPrice: undefined,
      gstRate: undefined,
    },
  });

  useEffect(() => {
    if (item) {
      form.reset({
        serviceTypeId: item.serviceTypeId,
        garmentTypeId: item.garmentTypeId,
        code: item.code || "",
        description: item.description || "",
        pricingUnit: item.pricingUnit,
        basePrice: item.basePrice,
        minimumPrice: item.minimumPrice ?? undefined,
        gstRate: item.gstRate ?? undefined,
      });
    } else {
      form.reset({
        serviceTypeId: "",
        garmentTypeId: "",
        code: "",
        description: "",
        pricingUnit: PricingUnit.PIECE,
        basePrice: undefined,
        minimumPrice: undefined,
        gstRate: undefined,
      });
    }
  }, [item, open, form]);

  const onSubmit = async (data: ServiceCatalogFormInputs) => {
    try {
      setSubmitting(true);

      if (mode === "create") {
        await serviceCatalogService.createItem(data);
        toast.success("Service catalog item created successfully");
      }

      if (mode === "edit" && item) {
        await serviceCatalogService.updateItem(item.id, data);
        toast.success("Service catalog item updated successfully");
      }

      setOpen(false);
      form.reset();
      onSuccess?.();
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(error.message);
        return;
      }

      toast.error(
        mode === "create"
          ? "Failed to create service catalog item"
          : "Failed to update service catalog item",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const title =
    mode === "create"
      ? "Create Service Catalog Item"
      : mode === "edit"
        ? "Edit Service Catalog Item"
        : "Service Catalog Item Details";

  const description =
    mode === "create"
      ? "Add pricing for a garment and service combination."
      : mode === "edit"
        ? "Update catalog pricing details."
        : "View catalog pricing details.";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>

      <SheetContent className="sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <ServiceCatalogForm
                control={form.control}
                mode={mode}
                serviceTypes={serviceTypes.map((s) => ({
                  id: s.id,
                  name: s.name,
                }))}
                garmentTypes={garmentTypes.map((g) => ({
                  id: g.id,
                  name: g.name,
                }))}
              />

              {mode !== "view" && (
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting
                    ? "Saving..."
                    : mode === "create"
                      ? "Create Catalog Item"
                      : "Update Catalog Item"}
                </Button>
              )}
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
