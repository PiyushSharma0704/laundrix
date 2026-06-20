import { useCallback, useEffect, useState } from "react";

import { GarmentType, GarmentTypeFilters } from "@/lib/types";

import { garmentTypeService } from "@/lib/api/garment-type.service";

export function useGarmentTypes(filters?: GarmentTypeFilters) {
  const [garmentTypes, setGarmentTypes] = useState<GarmentType[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchGarmentTypes = useCallback(async () => {
    try {
      setLoading(true);

      const data = await garmentTypeService.getGarmentTypes(filters);

      setGarmentTypes(data);
    } catch (error) {
      console.error("Failed to fetch garment types", error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchGarmentTypes();
  }, [fetchGarmentTypes]);

  return {
    garmentTypes,
    loading,
    refetch: fetchGarmentTypes,
  };
}
