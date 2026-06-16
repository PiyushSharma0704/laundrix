// store-sheet.tsx
"use client";

import { useEffect, useState } from "react";
import { Store } from "@/lib/types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { storeService } from "@/lib/api/store.service";
import { toast } from "sonner";
import { ApiError } from "@/lib/api/api-client";

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
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (store) {
      setName(store.name);
      setSlug(store.slug);
    } else {
      setName("");
      setSlug("");
    }
  }, [store, open]);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      await storeService.createStore({
        name,
        slug,
      });

      toast.success("Store created successfully");

      setOpen(false);
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>

      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          <Input
            placeholder="Store Name"
            value={name}
            disabled={mode === "view"}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Store Slug"
            value={slug}
            disabled={mode === "view"}
            onChange={(e) => setSlug(e.target.value)}
          />

          {mode !== "view" && (
            <Button
              className="w-full"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting
                ? "Saving..."
                : mode === "create"
                  ? "Create Store"
                  : "Update Store"}
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
