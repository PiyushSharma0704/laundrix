"use client";

import { useEffect, useState } from "react";

import { GarmentType } from "@/lib/types";

import { garmentTypeService } from "@/lib/api/garment-type.service";
import { ApiError } from "@/lib/api/api-client";

import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Form } from "@/components/ui/form";

import GarmentTypeForm from "./garment-type-form";

import {
  garmentTypeSchema,
  GarmentTypeFormInputs,
} from "@/utils/formSchemas/garment-type";

interface GarmentTypeSheetProps {
  mode: "create" | "view" | "edit";
  garmentType?: GarmentType;
  trigger: React.ReactNode;
  onSuccess?: () => void;
}

export default function GarmentTypeSheet({
  mode,
  garmentType,
  trigger,
  onSuccess,
}: GarmentTypeSheetProps) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<GarmentTypeFormInputs>({
    resolver: zodResolver(garmentTypeSchema),

    defaultValues: {
      categoryId: "",
      code: "",
      name: "",
      description: "",
      imageUrl: "",
      sortOrder: 0,
    },
  });

  useEffect(() => {
    if (garmentType) {
      form.reset({
        categoryId: garmentType.categoryId,
        code: garmentType.code || "",
        name: garmentType.name,
        description: garmentType.description || "",
        imageUrl: garmentType.imageUrl || "",
        sortOrder: garmentType.sortOrder ?? 0,
      });
    } else {
      form.reset({
        categoryId: "",
        code: "",
        name: "",
        description: "",
        imageUrl: "",
        sortOrder: 0,
      });
    }
  }, [garmentType, open, form]);

  const onSubmit = async (data: GarmentTypeFormInputs) => {
    try {
      setSubmitting(true);

      if (mode === "create") {
        await garmentTypeService.createGarmentType(data);

        toast.success("Garment type created successfully");
      }

      if (mode === "edit" && garmentType) {
        await garmentTypeService.updateGarmentType(garmentType.id, data);

        toast.success("Garment type updated successfully");
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
      ? "Create Garment Type"
      : mode === "edit"
        ? "Edit Garment Type"
        : "Garment Type Details";

  const description =
    mode === "create"
      ? "Add a new garment type."
      : mode === "edit"
        ? "Update garment type information."
        : "View garment type information.";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>

      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>

          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <GarmentTypeForm control={form.control} mode={mode} />

              {mode !== "view" && (
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting
                    ? "Saving..."
                    : mode === "create"
                      ? "Create Garment Type"
                      : "Update Garment Type"}
                </Button>
              )}
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
