// stores-page.tsx
"use client";

import { useStores } from "@/hooks/useStores";
import StoresTable from "./components/stores-table";
import PageWrapper from "@/components/common/page-wrapper";
import { Button } from "@/components/ui/button";
import StoreSheet from "./components/store-sheet";

export default function StoresPage() {
  const { stores, loading, refetch } = useStores();

  return (
    <PageWrapper
      title="Stores"
      subtitle="Manage all your laundry outlets"
      actions={
        <StoreSheet
          mode="create"
          onSuccess={refetch}
          trigger={<Button>Create Store +</Button>}
        />
      }
    >
      <StoresTable 
      loading={loading}
      stores={stores} onRefresh={refetch} />
    </PageWrapper>
  );
}
