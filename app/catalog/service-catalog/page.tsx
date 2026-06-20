"use client";

import PageWrapper from "@/components/common/page-wrapper";
import { Button } from "@/components/ui/button";

import { useServiceCatalog } from "@/hooks/useServiceCatalog";

import ServiceCatalogSheet from "./components/service-catalog-sheet";
import ServiceCatalogTable from "./components/service-catalog-table";

export default function ServiceCatalogPage() {
  const { items, loading, refetch } = useServiceCatalog();

  return (
    <PageWrapper
      title="Service Catalog"
      subtitle="Manage pricing for garment and service combinations"
      actions={
        <ServiceCatalogSheet
          mode="create"
          onSuccess={refetch}
          trigger={<Button>Create Catalog Item +</Button>}
        />
      }
    >
      <ServiceCatalogTable
        items={items}
        loading={loading}
        onRefresh={refetch}
      />
    </PageWrapper>
  );
}
