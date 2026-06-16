"use client";

import { useEffect, useState } from "react";
import { customerService } from "@/lib/api/customer.service";
import { Customer } from "@/lib/types";

interface UseCustomersProps {
  storeId: string;
}

export function useCustomers({ storeId }: UseCustomersProps) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCustomers = async () => {
    try {
      const result = await customerService.getCustomers(storeId);

      setCustomers(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (storeId) {
      loadCustomers();
    }
  }, [storeId]);

  return {
    customers,
    loading,
    refetch: loadCustomers,
  };
}
