import { Metadata } from "next";

import siteConfig from "@/utils/site-config";
import LoginForm from "@/components/features/auth/login-form";

export const metadata: Metadata = {
  title: `Login | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-md px-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back
        </h1>

        <p className="text-muted-foreground">
          Sign in to your Laundrix account
        </p>
      </div>

      <div className="mt-8">
        <LoginForm />
      </div>
    </div>
  );
}