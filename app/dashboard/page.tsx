"use client";

import { useAppSelector } from "@/store/hooks";
import GitActivityCard from "./components/widget";

export default function DashboardPage() {
  const user = useAppSelector((state) => state.auth.user);
  console.log("User in DashboardPage:", user);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back 👋 </h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening in your laundry business today.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Total Orders</p>
          <h2 className="text-3xl font-bold">248</h2>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Revenue</p>
          <h2 className="text-3xl font-bold">₹48,320</h2>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Active Customers</p>
          <h2 className="text-3xl font-bold">189</h2>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Drivers</p>
          <h2 className="text-3xl font-bold">8</h2>
        </div>
      </div>
      <GitActivityCard />
    </div>
  );
}
