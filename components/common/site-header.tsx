"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-50
        transition-all
        duration-300
        ${
          isScrolled
            ? "border-b bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
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
              F
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

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  text-sm
                  text-muted-foreground
                  transition-colors
                  hover:text-foreground
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <Button variant="ghost">
              Sign In
            </Button>

            <Button>
              Book Demo

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
              "
            >
              {isOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              border-t
              py-6
              lg:hidden
            "
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="
                    text-muted-foreground
                    transition-colors
                    hover:text-foreground
                  "
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="w-full"
                >
                  Sign In
                </Button>

                <Button className="w-full">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}