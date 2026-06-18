"use client";

import PageWrapper from "@/components/common/page-wrapper";
import ComingSoon from "@/components/common/coming-soon";

export default function Billing() {
  return (
    <PageWrapper
      title="Billing"
      subtitle="Manage customer billing"
    >
      <ComingSoon
        title="Billing Module"
        description="Billing management is currently under development."
      />
    </PageWrapper>
  );
}