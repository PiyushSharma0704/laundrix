"use client";

import PageWrapper from "@/components/common/page-wrapper";
import { Button } from "@/components/ui/button";

import GarmentCategoriesTable from "./components/garment-categories-table";
import GarmentCategorySheet from "./components/garment-category-sheet";

import { useGarmentCategories } from "@/hooks/useGarmentCategories";

export default function GarmentCategoriesPage() {
  const { categories, loading, refetch } = useGarmentCategories();

  return (
    <PageWrapper
      title="Garment Categories"
      subtitle="Manage all your garment categories"
      actions={
        <GarmentCategorySheet
          mode="create"
          onSuccess={refetch}
          trigger={<Button>Create Category +</Button>}
        />
      }
    >
      <GarmentCategoriesTable
        categories={categories}
        loading={loading}
        onRefresh={refetch}
      />
    </PageWrapper>
  );
}
