// app/stores/layout.tsx
import DashboardHeader from "@/components/common/dashboard-header";
import DashboardSidebar from "@/components/common/sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function StoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />

      <SidebarInset>
        <DashboardHeader />

        <main className="p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
