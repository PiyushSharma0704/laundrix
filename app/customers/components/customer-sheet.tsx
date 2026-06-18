"use client";

import { useEffect, useState } from "react";
import { Customer } from "@/lib/types";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { toast } from "sonner";
import { ApiError } from "@/lib/api/api-client";
import { customerService } from "@/lib/api/customer.service";
import {
  CustomerFormInputs,
  customerSchema,
} from "@/utils/formSchemas/customer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import CustomerForm from "./customer-form";
interface CustomerSheetProps {
  mode: "create" | "view" | "edit";
  customer?: Customer;
  trigger: React.ReactNode;
  onSuccess?: () => void;
}

export default function CustomerSheet({
  mode,
  customer,
  trigger,
  onSuccess,
}: CustomerSheetProps) {
  const [open, setOpen] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const form = useForm<CustomerFormInputs>({
    resolver: zodResolver(customerSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      notes: "",
      storeId: "",
    },
  });

  useEffect(() => {
    if (customer) {
      form.reset({
        firstName: customer.firstName,
        lastName: customer.lastName || "",
        phone: customer.phone,
        email: customer.email || "",
        notes: customer.notes || "",
        storeId: "",
      });
    }
  }, [customer, form]);
  const onSubmit = async (data: CustomerFormInputs) => {
    try {
      setSubmitting(true);

      if (mode === "create") {
        await customerService.createCustomer(data);

        toast.success("Customer created successfully");
      }

      if (mode === "edit" && customer) {
        await customerService.updateCustomer(customer.id, {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          notes: data.notes,
        });

        toast.success("Customer updated successfully");
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
      ? "Create Customer"
      : mode === "edit"
        ? "Edit Customer"
        : "Customer Details";

  const description =
    mode === "create"
      ? "Add a new customer."
      : mode === "edit"
        ? "Update customer information."
        : "View customer information.";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>

      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-6 space-y-4"
            >
              <CustomerForm control={form.control} mode={mode} />

              {mode !== "view" && (
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting
                    ? "Saving..."
                    : mode === "create"
                      ? "Create Customer"
                      : "Update Customer"}
                </Button>
              )}
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
