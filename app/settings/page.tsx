"use client";

import PageWrapper from "@/components/common/page-wrapper";
import ComingSoon from "@/components/common/coming-soon";

export default function Settings() {
  return (
    <PageWrapper
      title="Settings"
      subtitle="Manage Settings"
    >
      <ComingSoon
        title="Settings Module"
        description="Settings management is currently under development."
      />
    </PageWrapper>
  );
}