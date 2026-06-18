"use client";

import PageWrapper from "@/components/common/page-wrapper";
import ComingSoon from "@/components/common/coming-soon";

export default function OrdersPage() {
  return (
    <PageWrapper
      title="Orders"
      subtitle="Manage customer orders"
    >
      <ComingSoon
        title="Orders Module"
        description="Order management is currently under development."
      />
    </PageWrapper>
  );
}