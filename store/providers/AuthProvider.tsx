"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useAppDispatch } from "../hooks";
import { setUser, clearUser } from "../auth/authSlice";
import { getCurrentUser } from "../services/authBootstrap";
import { PUBLIC_ROUTES } from "@/utils/constants/routes";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    // Don't try to fetch the current user on public/auth pages
    if (PUBLIC_ROUTES.includes(pathname)) {
      dispatch(clearUser());
      return;
    }

    const initializeAuth = async () => {
      try {
        const response = await getCurrentUser();
        dispatch(setUser(response.data));
      } catch {
        dispatch(clearUser());
      }
    };

    initializeAuth();
  }, [dispatch, pathname]);

  return <>{children}</>;
}
