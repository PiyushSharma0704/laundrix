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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GarmentTypeFormInputs } from "@/utils/formSchemas/garment-type";
import { useGarmentCategories } from "@/hooks/useGarmentCategories";

interface GarmentTypeFormProps {
  control: Control<GarmentTypeFormInputs>;
  mode: "create" | "edit" | "view";
}

export default function GarmentTypeForm({
  control,
  mode,
}: GarmentTypeFormProps) {
  const isView = mode === "view";

  const { categories } = useGarmentCategories();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="categoryId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>

            <Select
              disabled={isView}
              onValueChange={field.onChange}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>

            <FormControl>
              <Input placeholder="Shirt" disabled={isView} {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

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
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>

            <FormControl>
              <Textarea
                placeholder="Men's and women's shirts"
                disabled={isView}
                rows={3}
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
                placeholder="https://..."
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
                placeholder="0"
                disabled={isView}
                {...field}
                value={field.value ?? ""}
                onChange={(e) =>
                  field.onChange(
                    e.target.value === "" ? undefined : Number(e.target.value),
                  )
                }
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
