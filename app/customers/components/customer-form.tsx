"use client";

import StoreSelect from "@/components/common/store-select";
import { Input } from "@/components/ui/input";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { CustomerFormInputs } from "@/utils/formSchemas/customer";
import { Control } from "react-hook-form";

interface CustomerFormProps {
  control: Control<CustomerFormInputs>;
  mode: "create" | "view" | "edit";
}

export default function CustomerForm({ control, mode }: CustomerFormProps) {
  const isView = mode === "view";

  return (
    <>
      <FormField
        control={control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>

            <FormControl>
              <Input
                placeholder="Enter first name"
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
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>

            <FormControl>
              <Input
                placeholder="Enter last name"
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
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>

            <FormControl>
              <Input
                placeholder="9876543210"
                disabled={mode !== "create"}
                {...field}
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
                placeholder="customer@email.com"
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
        name="notes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Notes</FormLabel>

            <FormControl>
              <Input placeholder="VIP Customer" disabled={isView} {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {mode === "create" && (
        <FormField
          control={control}
          name="storeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store</FormLabel>

              <FormControl>
                <StoreSelect value={field.value} onChange={field.onChange} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </>
  );
}
