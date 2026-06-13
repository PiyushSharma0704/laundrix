import { apiFetch } from "./client";
import { LoginRequest, LoginResponse } from "../types/auth";

export const login = (payload: LoginRequest) =>
  apiFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
