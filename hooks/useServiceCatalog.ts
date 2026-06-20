import { useCallback, useEffect, useState } from "react";

import { ServiceCatalogItem, ServiceCatalogItemFilters } from "@/lib/types";

import { serviceCatalogService } from "@/lib/api/service-catalog.service";

export function useServiceCatalog(filters?: ServiceCatalogItemFilters) {
  const [items, setItems] = useState<ServiceCatalogItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = useCallback(async () => {
    try {
      setLoading(true);

      const data = await serviceCatalogService.getItems();

      setItems(data);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return {
    items,
    loading,
    refetch: fetchItems,
  };
}
