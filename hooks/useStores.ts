// hooks/useStores.ts
import { Store } from "@/lib/types";
import { storeService } from "@/lib/api/store.service";
import { useEffect, useState } from "react";

export function useStores() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  const loadStores = async () => {
    try {
      setLoading(true);
      const data = await storeService.getMyStores();
      setStores(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStores();
  }, []);

  return {
    stores,
    loading,
    refetch: loadStores,
  };
}
