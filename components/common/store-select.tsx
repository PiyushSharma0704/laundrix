"use client";

import { useStores } from "@/hooks/useStores";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StoreSelectProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function StoreSelect({
  value,
  onChange,
  placeholder = "Select Store",
  disabled,
}: StoreSelectProps) {
  const { stores, loading } = useStores();

  return (
    <Select
      value={value}
      onValueChange={onChange}
      disabled={disabled || loading}
    >
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={
            loading ? "Loading stores..." : placeholder
          }
        />
      </SelectTrigger>

      <SelectContent>
        {stores.map((store) => (
          <SelectItem
            key={store.id}
            value={store.id}
          >
            {store.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}