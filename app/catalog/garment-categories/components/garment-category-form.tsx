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
    <div className="space-y-4">
      <FormField
        control={control}
        name="code"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Code</FormLabel>

            <FormControl>
              <Input
                placeholder="SHIRT"
                disabled={isView}
                {...field}
                value={field.value ?? ""}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

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
                placeholder="Formal shirts, casual shirts, t-shirts, etc."
                disabled={isView}
                rows={4}
                className="resize-none"
                {...field}
                value={field.value ?? ""}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="imageUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image URL</FormLabel>

            <FormControl>
              <Input
                placeholder="https://example.com/image.jpg"
                disabled={isView}
                {...field}
                value={field.value ?? ""}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="sortOrder"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sort Order</FormLabel>

            <FormControl>
              <Input
                type="number"
                min={0}
                disabled={isView}
                value={field.value ?? 0}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
