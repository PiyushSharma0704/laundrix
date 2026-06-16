"use client";

import PageWrapper from "@/components/common/page-wrapper";
import { Button } from "@/components/ui/button";

import CustomersTable from "./components/customers-table";
import CustomerSheet from "./components/customer-sheet";

import { useCustomers } from "@/hooks/useCustomers";
import { useAppSelector } from "@/store/hooks";

export default function CustomersPage() {
  const selectedStore = useAppSelector((state) => state.store.selectedStore);

  const { customers, loading, refetch } = useCustomers({
    storeId: selectedStore?.id || "",
  });

  if (!selectedStore) {
    return <div>Please select a store first. </div>;
  }

  if (loading) {
    return <div>Loading customers...</div>;
  }

  return (
    <PageWrapper
      title="Customers"
      subtitle="Manage your customer database"
      actions={
        <CustomerSheet
          mode="create"
          storeId={selectedStore.id}
          onSuccess={refetch}
          trigger={<Button>Create Customer + </Button>}
        />
      }
    >
      {" "}
      <CustomersTable
        customers={customers}
        storeId={selectedStore.id}
        onRefresh={refetch}
      />{" "}
    </PageWrapper>
  );
}
