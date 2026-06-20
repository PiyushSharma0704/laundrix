import { useCallback, useEffect, useState } from "react";

import { ServiceType, ServiceTypeFilters } from "@/lib/types";

import { serviceTypeService } from "@/lib/api/service-type.service";

export function useServiceTypes(filters?: ServiceTypeFilters) {
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchServiceTypes = useCallback(async () => {
    try {
      setLoading(true);

      const data = await serviceTypeService.getServiceTypes();

      setServiceTypes(data);
    } catch (error) {
      console.error("Failed to fetch service types", error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchServiceTypes();
  }, [fetchServiceTypes]);

  return {
    serviceTypes,
    loading,
    refetch: fetchServiceTypes,
  };
}
