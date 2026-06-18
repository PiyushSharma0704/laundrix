import { useEffect, useState } from "react";
import { customerService } from "@/lib/api/customer.service";
import { Customer } from "@/lib/types";

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      setLoading(true);

      const response =
        await customerService.getCustomers();

      setCustomers(response.data.data);
    } catch (error) {
      console.error("Failed to fetch customers", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return {
    customers,
    loading,
    refetch: fetchCustomers,
  };
}