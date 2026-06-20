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
import { ServiceTypeFormValues } from "@/utils/formSchemas/service-type-schema";

interface ServiceTypeFormProps {
  control: Control<ServiceTypeFormValues>;
  mode: "create" | "edit" | "view";
}

export default function ServiceTypeForm({
  control,
  mode,
}: ServiceTypeFormProps) {
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
                placeholder="DRY_CLEAN"
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
            <FormLabel>Name *</FormLabel>

            <FormControl>
              <Input placeholder="Dry Cleaning" disabled={isView} {...field} />
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
                placeholder="Professional dry cleaning service"
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
                disabled={isView}
                {...field}
                value={field.value ?? 0}
                onChange={(e) =>
                  field.onChange(
                    e.target.value === "" ? 0 : Number(e.target.value),
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
