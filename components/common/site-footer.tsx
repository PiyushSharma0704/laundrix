"use client";

import Link from "next/link";
import {
  X,
} from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#" },
    { label: "Integrations", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
                L
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Laundrix
                </h3>

                <p className="text-sm text-muted-foreground">
                  Laundry Business OS
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Manage orders, garment tracking, pickups,
              deliveries, payments and customer retention
              from one modern platform.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="rounded-lg border p-2 transition hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="rounded-lg border p-2 transition hover:bg-muted"
              >
                {/* <Linkedin className="h-4 w-4" /> */}
              </Link>

              <Link
                href="#"
                className="rounded-lg border p-2 transition hover:bg-muted"
              >
                {/* <Instagram className="h-4 w-4" /> */}
              </Link>

              <Link
                href="#"
                className="rounded-lg border p-2 transition hover:bg-muted"
              >
                {/* <Youtube className="h-4 w-4" /> */}
              </Link>

              <Link
                href="#"
                className="rounded-lg border p-2 transition hover:bg-muted"
              >
                {/* <Facebook className="h-4 w-4" /> */}
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold">
                {section}
              </h4>

              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Laundrix. All rights reserved.
          </div>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}