import { useEffect, useState } from "react";

import { garmentCategoryService } from "@/lib/api/garment-category.service";

import { GarmentCategory } from "@/lib/types";

export function useGarmentCategories() {
  const [categories, setCategories] = useState<GarmentCategory[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const categories = await garmentCategoryService.getCategories();

      setCategories(categories);
    } catch (error) {
      console.error("Failed to fetch garment categories", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    refetch: fetchCategories,
  };
}
