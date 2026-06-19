// app/catalog/service-catalog/page.tsx
"use client";

import ComingSoon from "@/components/common/coming-soon";
import PageWrapper from "@/components/common/page-wrapper";

export default function ServiceCatalog() {
  return (
    <PageWrapper
      title="Garment Categories"
      subtitle="Manage all your garment categories"
    >
      <ComingSoon />
    </PageWrapper>
  );
}
