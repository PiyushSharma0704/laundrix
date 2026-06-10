"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Perfect for single-store laundry businesses.",
    price: "₹999",
    period: "/month",
    features: [
      "Laundry POS",
      "Customer CRM",
      "QR Garment Tracking",
      "WhatsApp Notifications",
      "Basic Analytics",
    ],
  },
  {
    name: "Growth",
    description: "Designed for growing multi-store operations.",
    price: "₹2,999",
    period: "/month",
    popular: true,
    features: [
      "Everything in Starter",
      "Pickup & Delivery",
      "Advanced Analytics",
      "Staff Management",
      "Multi-Store Dashboard",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    description: "For franchise and large-scale laundry networks.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Stores",
      "Franchise Management",
      "Custom Integrations",
      "Dedicated Account Manager",
      "Advanced Security",
      "SLA Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Simple Pricing
            <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              That Scales With You
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Whether you're running a single store or a nationwide franchise,
            Laundrix grows with your business.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className={`
                relative rounded-3xl border bg-card/70 p-8 backdrop-blur
                transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : ""
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-muted-foreground">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.name === "Enterprise"
                  ? "Contact Sales"
                  : "Start Free Trial"}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          No setup fees • Free migration support • Cancel anytime
        </div>
      </div>
    </section>
  );
}