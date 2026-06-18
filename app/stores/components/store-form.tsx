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

import { StoreFormInputs } from "@/utils/formSchemas/store";

interface StoreFormProps {
  control: Control<StoreFormInputs>;
  mode: "create" | "view" | "edit";
}

export default function StoreForm({
  control,
  mode,
}: StoreFormProps) {
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
                placeholder="Delhi Store"
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
                placeholder="delhi-store"
                disabled={isView}
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}