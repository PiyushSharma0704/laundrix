"use client";

import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GarmentCategoryFormInputs } from "@/utils/formSchemas/garment-category-schema";


interface GarmentCategoryFormProps {
  control: Control<GarmentCategoryFormInputs>;
  mode: "create" | "view" | "edit";
}

export default function GarmentCategoryForm({
  control,
  mode,
}: GarmentCategoryFormProps) {
  const isView = mode === "view";

  return (
    <>
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category Name</FormLabel>

            <FormControl>
              <Input placeholder="Shirts" disabled={isView} {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>

            <FormControl>
              <Textarea
                placeholder="Formal shirts, casual shirts, etc."
                disabled={isView}
                className="resize-none"
                rows={4}
                {...field}
                value={field.value ?? ""}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
