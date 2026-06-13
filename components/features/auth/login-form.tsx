"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { loginSchema, type LoginFormInputs } from "@/utils/formSchemas/login";
import { tokenStorage } from "@/lib/api/token";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api/auth";

export default function LoginForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);

    try {
      const response = await login(data);

      tokenStorage.setAccessToken(response.data.accessToken);

      tokenStorage.setRefreshToken(response.data.refreshToken);

      toast.success("Login successful");

      router.push("/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    console.log("Google Login");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-6">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <div className="flex flex-col gap-1">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <PasswordInput
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Link
              href="/auth/forgot-password"
              className="ml-auto text-sm text-muted-foreground hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full py-5" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

            {isLoading ? "Signing In..." : "Sign In"}
          </Button>

          {/* Divider */}
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:border-t">
            <span className="relative z-10 bg-background px-4 text-muted-foreground">
              Or
            </span>
          </div>

          {/* Google */}
          <Button
            type="button"
            variant="outline"
            className="w-full py-5"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <FcGoogle />
            Continue with Google
          </Button>

          {/* Signup */}
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="underline underline-offset-4">
              Create account
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
