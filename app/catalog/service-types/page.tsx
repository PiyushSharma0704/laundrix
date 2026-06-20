"use client";

import PageWrapper from "@/components/common/page-wrapper";
import { Button } from "@/components/ui/button";

import { useServiceTypes } from "@/hooks/useServiceTypes";

import ServiceTypeSheet from "./components/service-type-sheet";
import ServiceTypesTable from "./components/service-types-table";

export default function ServiceTypesPage() {
  const { serviceTypes, loading, refetch } = useServiceTypes();

  return (
    <PageWrapper
      title="Service Types"
      subtitle="Manage all your service types"
      actions={
        <ServiceTypeSheet
          mode="create"
          onSuccess={refetch}
          trigger={<Button>Create Service Type +</Button>}
        />
      }
    >
      <ServiceTypesTable
        serviceTypes={serviceTypes}
        loading={loading}
        onRefresh={refetch}
      />
    </PageWrapper>
  );
}
