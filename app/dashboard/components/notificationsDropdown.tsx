"use client";

import Link from "next/link";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api/api-client";
import { API_ROUTES } from "@/utils/constants/api-routes";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UserNav() {
    const router = useRouter();
  
  const handleLogout = async () => {
    try {
      await apiClient.post(API_ROUTES.LOGOUT);

      toast.success("Logged out successfully");

      router.replace("/auth/login");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to logout");
    }
  };

  return (
    <DropdownMenu>
      {" "}
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          className="flex items-center gap-3 rounded-xl border bg-background px-3 py-2 shadow-sm transition-all hover:bg-muted hover:shadow-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground">
            P
          </div>
          <div className="hidden text-left lg:block">
            <p className="text-sm font-medium text-foreground leading-none">
              Piyush Sharma
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Owner</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/dashboard/profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-600 focus:text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
