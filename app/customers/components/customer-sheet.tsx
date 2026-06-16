"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

import { toast } from "sonner";

interface CustomerSheetProps {
  mode: "create" | "view" | "edit";
  customer?: Customer;
  storeId: string;
  trigger: React.ReactNode;
  onSuccess?: () => void;
}

export default function CustomerSheet({
  mode,
  customer,
  storeId,
  trigger,
  onSuccess,
}: CustomerSheetProps) {
  const [open, setOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (customer) {
      setFirstName(customer.firstName);
      setLastName(customer.lastName || "");
      setPhone(customer.phone);
      setEmail(customer.email || "");
    }
  }, [customer, open]);

  const handleSubmit = async () => {
    try {
      await customerService.createCustomer({
        firstName,
        lastName,
        phone,
        email,
        storeId,
      });

      toast.success("Customer created successfully");

      setOpen(false);

      onSuccess?.();
    } catch {
      toast.error("Failed to save customer");
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {" "}
      <SheetTrigger asChild>{trigger} </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {mode === "create"
              ? "Create Customer"
              : mode === "edit"
                ? "Edit Customer"
                : "Customer Details"}
          </SheetTitle>

          <SheetDescription>Manage customer details.</SheetDescription>
        </SheetHeader>

        <div className="space-y-4 mt-6">
          <Input
            placeholder="First Name"
            value={firstName}
            disabled={mode === "view"}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Input
            placeholder="Last Name"
            value={lastName}
            disabled={mode === "view"}
            onChange={(e) => setLastName(e.target.value)}
          />

          <Input
            placeholder="Phone"
            value={phone}
            disabled={mode === "view"}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Input
            placeholder="Email"
            value={email}
            disabled={mode === "view"}
            onChange={(e) => setEmail(e.target.value)}
          />

          {mode !== "view" && (
            <Button className="w-full" onClick={handleSubmit}>
              {mode === "create" ? "Create Customer" : "Update Customer"}
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
