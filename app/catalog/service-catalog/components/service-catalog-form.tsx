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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PricingUnit } from "@/lib/types";

import { ServiceCatalogFormInputs } from "@/utils/formSchemas/service-form-schema";

interface Option {
  id: string;
  name: string;
}

interface ServiceCatalogFormProps {
  control: Control<ServiceCatalogFormInputs>;

  mode: "create" | "edit" | "view";

  serviceTypes: Option[];

  garmentTypes: Option[];
}

export default function ServiceCatalogForm({
  control,
  mode,
  serviceTypes,
  garmentTypes,
}: ServiceCatalogFormProps) {
  const isView = mode === "view";

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="serviceTypeId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Service Type</FormLabel>

            <Select
              disabled={isView}
              value={field.value}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                {serviceTypes.map((serviceType) => (
                  <SelectItem key={serviceType.id} value={serviceType.id}>
                    {serviceType.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="garmentTypeId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Garment Type</FormLabel>

            <Select
              disabled={isView}
              value={field.value}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select garment type" />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                {garmentTypes.map((garmentType) => (
                  <SelectItem key={garmentType.id} value={garmentType.id}>
                    {garmentType.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="pricingUnit"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pricing Unit</FormLabel>

            <Select
              disabled={isView}
              value={field.value}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select pricing unit" />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                <SelectItem value={PricingUnit.PIECE}>Per Piece</SelectItem>

                <SelectItem value={PricingUnit.KG}>Per KG</SelectItem>

                <SelectItem value={PricingUnit.SQ_FT}>Per Sq Ft</SelectItem>
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="basePrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Base Price</FormLabel>

            <FormControl>
              <Input
                type="number"
                step="0.01"
                placeholder="100"
                disabled={isView}
                value={field.value ?? ""}
                onChange={(e) =>
                  field.onChange(
                    e.target.value === "" ? undefined : Number(e.target.value),
                  )
                }
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="minimumPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Minimum Price</FormLabel>

            <FormControl>
              <Input
                type="number"
                step="0.01"
                placeholder="50"
                disabled={isView}
                value={field.value ?? ""}
                onChange={(e) =>
                  field.onChange(
                    e.target.value === "" ? undefined : Number(e.target.value),
                  )
                }
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="gstRate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>GST Rate (%)</FormLabel>

            <FormControl>
              <Input
                type="number"
                placeholder="18"
                disabled={isView}
                value={field.value ?? ""}
                onChange={(e) =>
                  field.onChange(
                    e.target.value === "" ? undefined : Number(e.target.value),
                  )
                }
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
            <FormLabel>Code</FormLabel>

            <FormControl>
              <Input
                placeholder="SHIRT_DC"
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
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>

            <FormControl>
              <Textarea
                placeholder="Dry cleaning for men's shirt"
                disabled={isView}
                rows={3}
                {...field}
                value={field.value ?? ""}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
