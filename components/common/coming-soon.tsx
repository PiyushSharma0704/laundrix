"use client";

import { Construction } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "This feature is currently under development and will be available soon.",
}: ComingSoonProps) {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 rounded-full border bg-muted p-5">
          <Construction className="h-10 w-10 text-muted-foreground" />
        </div>

        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
