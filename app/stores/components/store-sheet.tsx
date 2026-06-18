"use client";

import { useEffect, useState } from "react";

import { Store } from "@/lib/types";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Form,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { ApiError } from "@/lib/api/api-client";
import { storeService } from "@/lib/api/store.service";

import StoreForm from "./store-form";

import {
  storeSchema,
  StoreFormInputs,
} from "@/utils/formSchemas/store";

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
    },
  });

  useEffect(() => {
    if (store) {
      form.reset({
        name: store.name,
        slug: store.slug,
      });
    } else {
      form.reset({
        name: "",
        slug: "",
      });
    }
  }, [store, open, form]);

  const onSubmit = async (
    data: StoreFormInputs,
  ) => {
    try {
      setSubmitting(true);

      if (mode === "create") {
        await storeService.createStore(data);

        toast.success(
          "Store created successfully",
        );
      }

      if (mode === "edit" && store) {
        await storeService.updateStore(
          store.id,
          data,
        );

        toast.success(
          "Store updated successfully",
        );
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
      ? "Add a new laundry outlet."
      : mode === "edit"
        ? "Update store information."
        : "View store information.";

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>

      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>
            {title}
          </SheetTitle>

          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(
              onSubmit,
            )}
            className="mt-6 space-y-4"
          >
            <StoreForm
              control={form.control}
              mode={mode}
            />

            {mode !== "view" && (
              <Button
                type="submit"
                className="w-full"
                disabled={submitting}
              >
                {submitting
                  ? "Saving..."
                  : mode === "create"
                    ? "Create Store"
                    : "Update Store"}
              </Button>
            )}
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}