// app/stores/components/store-form.tsx

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

import { StoreFormInputs } from "@/utils/formSchemas/store";

interface StoreFormProps {
  control: Control<StoreFormInputs>;
  mode: "create" | "view" | "edit";
}

export default function StoreForm({ control, mode }: StoreFormProps) {
  const isView = mode === "view";

  return (
    <>
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Store Name</FormLabel>

            <FormControl>
              <Input
                placeholder="Delhi Main Store"
                disabled={isView}
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="slug"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Store Slug</FormLabel>

            <FormControl>
              <Input
                placeholder="delhi-main-store"
                disabled={isView}
                {...field}
              />
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
            <FormLabel>Store Code</FormLabel>

            <FormControl>
              <Input placeholder="DEL001" disabled={isView} {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>

            <FormControl>
              <Input
                placeholder="+91 9876543210"
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
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>

            <FormControl>
              <Input
                type="email"
                placeholder="store@laundrix.com"
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
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address</FormLabel>

            <FormControl>
              <Textarea
                placeholder="Store address..."
                disabled={isView}
                {...field}
                value={field.value ?? ""}
                rows={4}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
