"use client";

import { useEffect, useState } from "react";

import { GarmentCategory } from "@/lib/types";

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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { ApiError } from "@/lib/api/api-client";
import { garmentCategoryService } from "@/lib/api/garment-category.service";

import GarmentCategoryForm from "./garment-category-form";
import {
  GarmentCategoryFormInputs,
  garmentCategorySchema,
} from "@/utils/formSchemas/garment-category-schema";

interface GarmentCategorySheetProps {
  mode: "create" | "view" | "edit";
  category?: GarmentCategory;
  trigger: React.ReactNode;
  onSuccess?: () => void;
}

export default function GarmentCategorySheet({
  mode,
  category,
  trigger,
  onSuccess,
}: GarmentCategorySheetProps) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<GarmentCategoryFormInputs>({
    resolver: zodResolver(garmentCategorySchema),
    defaultValues: {
      code: "",
      name: "",
      description: "",
      imageUrl: "",
      sortOrder: 0,
    },
  });

  useEffect(() => {
    if (category) {
      form.reset({
        code: category.code || "",
        name: category.name,
        description: category.description || "",
        imageUrl: category.imageUrl || "",
        sortOrder: category.sortOrder ?? 0,
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
  }, [category, open, form]);

  const onSubmit = async (data: GarmentCategoryFormInputs) => {
    try {
      setSubmitting(true);

      if (mode === "create") {
        await garmentCategoryService.createCategory(data);

        toast.success("Garment category created successfully");
      }

      if (mode === "edit" && category) {
        await garmentCategoryService.updateCategory(category.id, data);

        toast.success("Garment category updated successfully");
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
      ? "Create Garment Category"
      : mode === "edit"
        ? "Edit Garment Category"
        : "Garment Category Details";

  const description =
    mode === "create"
      ? "Add a new garment category."
      : mode === "edit"
        ? "Update garment category information."
        : "View garment category information.";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>

      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>

          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4 px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <GarmentCategoryForm control={form.control} mode={mode} />

              {mode !== "view" && (
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting
                    ? "Saving..."
                    : mode === "create"
                      ? "Create Category"
                      : "Update Category"}
                </Button>
              )}
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
