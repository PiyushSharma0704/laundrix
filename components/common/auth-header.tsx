"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";


export default function AuthHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-primary
                text-sm
                font-bold
                text-primary-foreground
              "
            >
              L
            </div>

            <div>
              <div className="font-bold">
                Laundrix
              </div>

              <div className="text-xs text-muted-foreground">
                Laundry Business OS
              </div>
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="
                hidden
                items-center
                gap-2
                text-sm
                text-muted-foreground
                transition-colors
                hover:text-foreground
                sm:flex
              "
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}