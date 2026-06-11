import type { Metadata } from "next";
import { headers } from "next/headers";
import siteConfig from "@/utils/site-config";
import SiteHeader from "@/components/common/site-header";
import SiteFooter from "@/components/common/site-footer";

export const metadata: Metadata = {
  title: `${siteConfig.title}`,
  description: siteConfig.description,
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  if (pathname === "/auth/deeplink") {
    return <>{children}</>;
  }

  return (
    <>
      <>
          <SiteHeader />
          {children}
          <SiteFooter />
      </>
    </>
  );
}
