"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            bg-card/70
            p-10
            backdrop-blur
            md:p-16
          "
        >
          {/* Decorative Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/10" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Ready to grow your laundry business?
            </div>

            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Stop Managing Operations
              <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                Start Scaling Them
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Join thousands of laundry businesses using Laundrix to
              automate operations, increase efficiency, and deliver
              exceptional customer experiences.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 px-8 shadow-xl shadow-primary/20"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Free onboarding</span>
              <span>✓ Migration support</span>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-t pt-10 md:grid-cols-4">
              <div>
                <div className="text-3xl font-bold">5,000+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Locations
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">22+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Countries
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">20,000+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Uptime
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}