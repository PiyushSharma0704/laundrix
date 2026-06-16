"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PageWrapperProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  goBackHref?: string;
}

export default function PageWrapper({
  children,
  title,
  subtitle,
  actions,
  goBackHref,
}: PageWrapperProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            {goBackHref && (
              <Button asChild variant="outline" size="icon">
                <Link href={goBackHref}>
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            )}

            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          </div>

          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>

        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>

      {children}
    </div>
  );
}
