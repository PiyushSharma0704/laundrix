"use client";

import { motion } from "framer-motion";
import { features } from "@/utils/constants";

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground">
            Everything You Need
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Built for Modern
            <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Laundry Businesses
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Manage operations, customers, deliveries,
            payments and growth from a single platform.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-border
                  bg-card/70
                  p-8
                  backdrop-blur
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:shadow-2xl
                  hover:shadow-primary/10
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      h-40
                      w-40
                      rounded-full
                      bg-primary/15
                      blur-3xl
                    "
                  />
                </div>

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-medium text-primary">
                  Learn more →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}