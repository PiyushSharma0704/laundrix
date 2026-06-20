"use client";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { Store } from "@/lib/types";

import { ApiError } from "@/lib/api/api-client";
import { storeService } from "@/lib/api/store.service";

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

import StoreForm from "./store-form";

import { storeSchema, StoreFormInputs } from "@/utils/formSchemas/store";

interface StoreSheetProps {
  mode: "create" | "view" | "edit";
  store?: Store;
  trigger: React.ReactNode;
  onSuccess?: () => void;
}

export default function StoreSheet({
  mode,
  store,
  trigger,
  onSuccess,
}: StoreSheetProps) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<StoreFormInputs>({
    resolver: zodResolver(storeSchema),

    defaultValues: {
      name: "",
      slug: "",
      code: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  useEffect(() => {
    if (store) {
      form.reset({
        name: store.name,
        slug: store.slug,
        code: store.code,
        phone: store.phone ?? "",
        email: store.email ?? "",
        address: store.address ?? "",
      });
    } else {
      form.reset({
        name: "",
        slug: "",
        code: "",
        phone: "",
        email: "",
        address: "",
      });
    }
  }, [store, open, form]);

  const onSubmit = async (data: StoreFormInputs) => {
    try {
      setSubmitting(true);

      const payload = {
        ...data,
        phone: data.phone || undefined,
        email: data.email || undefined,
        address: data.address || undefined,
      };

      if (mode === "create") {
        await storeService.createStore(payload);

        toast.success("Store created successfully");
      }

      if (mode === "edit" && store) {
        await storeService.updateStore(store.id, payload);

        toast.success("Store updated successfully");
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
      ? "Create Store"
      : mode === "edit"
        ? "Edit Store"
        : "Store Details";

  const description =
    mode === "create"
      ? "Add a new laundry store."
      : mode === "edit"
        ? "Update store information."
        : "View store information.";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>

      <SheetContent className="sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>

          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <StoreForm control={form.control} mode={mode} />

              {mode !== "view" && (
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting
                    ? "Saving..."
                    : mode === "create"
                      ? "Create Store"
                      : "Update Store"}
                </Button>
              )}
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
