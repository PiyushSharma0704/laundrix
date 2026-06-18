// app/customers/page.tsx
"use client";

import PageWrapper from "@/components/common/page-wrapper";
import { Button } from "@/components/ui/button";
import { useCustomers } from "@/hooks/useCustomers";
import CustomerSheet from "./components/customer-sheet";
import CustomersTable from "./components/customers-table";

export default function CustomersPage() {
  const { customers, loading, refetch } = useCustomers();

  return (
    <PageWrapper
      title="Customers"
      subtitle="Manage all your customers"
      actions={
        <CustomerSheet
          mode="create"
          onSuccess={refetch}
          trigger={<Button>Create Customer +</Button>}
        />
      }
    >
      <CustomersTable
        loading={loading}
        customers={customers}
        onRefresh={refetch}
      />
    </PageWrapper>
  );
}
