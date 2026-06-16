import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import siteConfig from "@/utils/site-config";
import AuthPageBG from "@/public/images/laundrix-auth-cover.png";
import AuthHeader from "@/components/common/auth-header";

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
      <AuthHeader />
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="p-0 bg-card hidden lg:flex">
          <div className="flex flex-1 items-center justify-center relative">
            <Image
              src={AuthPageBG}
              alt="Laundrix"
              sizes="100vw"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </>
  );
}
