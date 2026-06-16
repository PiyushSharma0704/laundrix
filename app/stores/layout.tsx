// /stores/layout.tsx
import DashboardHeader from "@/components/common/dashboard-header";
import DashboardSidebar from "@/components/common/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden">
      {" "}
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto p-6 bg-muted/30">
          {children}
        </main>
      </div>
    </div>
  );
}
