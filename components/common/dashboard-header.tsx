"use client";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import UserNav from "@/app/dashboard/components/notificationsDropdown";

interface DashboardHeaderProps {
  title?: string;
}

export default function DashboardHeader({
  title = "Dashboard",
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-xl">
      <div>
        <h1 className="text-lg font-semibold">{title} </h1>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </Button>

        <UserNav />
      </div>
    </header>
  );
}
