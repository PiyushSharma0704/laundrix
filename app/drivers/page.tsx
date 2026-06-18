"use client";

import PageWrapper from "@/components/common/page-wrapper";
import ComingSoon from "@/components/common/coming-soon";

export default function DriversPage() {
  return (
    <PageWrapper
      title="Drivers"
      subtitle="Manage Drivers"
    >
      <ComingSoon
        title="Drivers Module"
        description="Drivers management is currently under development."
      />
    </PageWrapper>
  );
}