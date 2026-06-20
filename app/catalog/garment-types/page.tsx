// app/catalog/garment-types/page.tsx

"use client";

import PageWrapper from "@/components/common/page-wrapper";
import { Button } from "@/components/ui/button";

import { useGarmentTypes } from "@/hooks/useGarmentTypes";

import GarmentTypeSheet from "./components/garment-type-sheet";
import GarmentTypesTable from "./components/garment-types-table";

export default function GarmentTypesPage() {
  const { garmentTypes, loading, refetch } = useGarmentTypes();

  return (
    <PageWrapper
      title="Garment Types"
      subtitle="Manage all your garment types"
      actions={
        <GarmentTypeSheet
          mode="create"
          onSuccess={refetch}
          trigger={<Button>Create Garment Type +</Button>}
        />
      }
    >
      <GarmentTypesTable
        garmentTypes={garmentTypes}
        loading={loading}
        onRefresh={refetch}
      />
    </PageWrapper>
  );
}
