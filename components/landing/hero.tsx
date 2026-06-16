"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Shirt,
  Truck,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-chart-2/20 blur-[120px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-chart-3/15 blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-2 backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Trusted by modern laundry brands
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              {/* Floating Laundry Tag */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-4, 2, -4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-6
                  top-8
                  hidden
                  lg:block
                "
              >
                <div className="rounded-2xl border bg-card/90 p-4 shadow-xl backdrop-blur">
                  <div className="text-xs text-muted-foreground">
                    ORDER TAG
                  </div>

                  <div className="mt-1 font-semibold">
                    #LDR-5821
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Wash & Fold
                  </div>

                  <div className="mt-2 inline-flex rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Ready For Delivery
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  mt-8
                  text-5xl
                  font-bold
                  tracking-tight
                  leading-[0.95]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Run Your Entire
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-primary
                    via-chart-2
                    to-chart-3
                    bg-clip-text
                    text-transparent
                  "
                >
                  Laundry Business
                </span>

                <br />

                From One Dashboard
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                mt-8
                max-w-xl
                text-lg
                leading-relaxed
                text-muted-foreground
              "
            >
              Manage orders, garment tracking, pickups, deliveries,
              payments, WhatsApp automation and analytics from a
              single operating system built for modern laundry
              businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-12 rounded-xl px-8 shadow-xl shadow-primary/30"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-xl px-8"
              >
                Book Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-14 grid grid-cols-3 gap-8 border-t pt-8"
            >
              <div>
                <h3 className="text-3xl font-bold">5,000+</h3>
                <p className="text-sm text-muted-foreground">
                  Locations
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">22+</h3>
                <p className="text-sm text-muted-foreground">
                  Countries
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">20,000+</h3>
                <p className="text-sm text-muted-foreground">
                  Daily Users
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                rounded-3xl
                border
                bg-card/80
                p-6
                shadow-2xl
                backdrop-blur
              "
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">
                    Laundrix Dashboard
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Today&quot;s Overview
                  </p>
                </div>

                <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Live
                </div>
              </div>

              {/* Widgets */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border p-4">
                  <Shirt className="mb-3 h-5 w-5 text-primary" />

                  <p className="text-sm text-muted-foreground">
                    Orders Today
                  </p>

                  <h4 className="mt-2 text-3xl font-bold">
                    248
                  </h4>
                </div>

                <div className="rounded-2xl border p-4">
                  <Truck className="mb-3 h-5 w-5 text-chart-2" />

                  <p className="text-sm text-muted-foreground">
                    Deliveries
                  </p>

                  <h4 className="mt-2 text-3xl font-bold">
                    89
                  </h4>
                </div>

                <div className="rounded-2xl border p-4">
                  <IndianRupee className="mb-3 h-5 w-5 text-chart-3" />

                  <p className="text-sm text-muted-foreground">
                    Revenue
                  </p>

                  <h4 className="mt-2 text-3xl font-bold">
                    ₹42K
                  </h4>
                </div>

                <div className="rounded-2xl border p-4">
                  <p className="text-sm text-muted-foreground">
                    WhatsApp Alerts
                  </p>

                  <h4 className="mt-2 text-3xl font-bold">
                    1,240
                  </h4>
                </div>
              </div>

              {/* Activity */}
              <div className="mt-6 rounded-2xl border p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-medium">
                    Recent Activity
                  </span>

                  <span className="text-sm text-primary">
                    Live Updates
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Order #5821 processed</span>
                    <span className="text-muted-foreground">
                      2m ago
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Pickup assigned</span>
                    <span className="text-muted-foreground">
                      5m ago
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Payment received</span>
                    <span className="text-muted-foreground">
                      9m ago
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}