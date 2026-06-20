"use client";

import { ReactNode, useEffect, useState } from "react";

import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ServiceType } from "@/lib/types";

import { serviceTypeService } from "@/lib/api/service-type.service";
import { ApiError } from "@/lib/api/api-client";

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
import {
  ServiceTypeFormValues,
  serviceTypeSchema,
} from "@/utils/formSchemas/service-type-schema";
import ServiceTypeForm from "./service-type-form";

interface ServiceTypeSheetProps {
  mode: "create" | "edit" | "view";
  serviceType?: ServiceType;
  trigger: ReactNode;
  onSuccess?: () => void;
}

export default function ServiceTypeSheet({
  mode,
  serviceType,
  trigger,
  onSuccess,
}: ServiceTypeSheetProps) {
  const [open, setOpen] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ServiceTypeFormValues>({
    resolver: zodResolver(serviceTypeSchema),

    defaultValues: {
      code: "",
      name: "",
      description: "",
      imageUrl: "",
      sortOrder: 0,
    },
  });

  useEffect(() => {
    if (serviceType) {
      form.reset({
        code: serviceType.code || "",
        name: serviceType.name,
        description: serviceType.description || "",
        imageUrl: serviceType.imageUrl || "",
        sortOrder: serviceType.sortOrder ?? 0,
      });
    } else {
      form.reset({
        code: "",
        name: "",
        description: "",
        imageUrl: "",
        sortOrder: 0,
      });
    }
  }, [serviceType, open, form]);

  const onSubmit = async (data: ServiceTypeFormValues) => {
    try {
      setSubmitting(true);

      if (mode === "create") {
        await serviceTypeService.createServiceType(data);

        toast.success("Service type created successfully");
      }

      if (mode === "edit" && serviceType) {
        await serviceTypeService.updateServiceType(serviceType.id, data);

        toast.success("Service type updated successfully");
      }

      setOpen(false);

      form.reset();

      onSuccess?.();
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(error.message);
        return;
      }

      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const title =
    mode === "create"
      ? "Create Service Type"
      : mode === "edit"
        ? "Edit Service Type"
        : "Service Type Details";

  const description =
    mode === "create"
      ? "Add a new service type."
      : mode === "edit"
        ? "Update service type information."
        : "View service type information.";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>

      <SheetContent className="sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>

          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <ServiceTypeForm control={form.control} mode={mode} />

              {mode !== "view" && (
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting
                    ? "Saving..."
                    : mode === "create"
                      ? "Create Service Type"
                      : "Update Service Type"}
                </Button>
              )}
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
