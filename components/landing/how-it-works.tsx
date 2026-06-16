"use client";

import { motion } from "framer-motion";
import { steps } from "@/utils/constants/constants";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-chart-2/10 blur-[140px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            From Pickup to
            <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Perfect Delivery
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Every garment follows a structured workflow designed to maximize
            efficiency and customer satisfaction.
          </p>
        </motion.div>

        {/* Workflow */}
        <div className="mt-24">
          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative"
                >
                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[calc(100%+8px)] top-12 hidden lg:block">
                      <ArrowRight className="h-5 w-5 text-muted-foreground/50" />
                    </div>
                  )}

                  <div
                    className="
                      group
                      h-full
                      rounded-3xl
                      border
                      bg-card/70
                      p-6
                      backdrop-blur
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-primary/30
                      hover:shadow-xl
                      hover:shadow-primary/10
                    "
                  >
                    {/* Step Number */}
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        Step {index + 1}
                      </span>

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          bg-primary/10
                          text-primary
                          transition-transform
                          group-hover:scale-110
                        "
                      >
                        <Icon size={22} />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold">{step.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Dashboard Mock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            mx-auto
            mt-20
            max-w-5xl
            rounded-3xl
            border
            bg-card/80
            p-6
            backdrop-blur
          "
        >
          <div className="grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="
                  rounded-2xl
                  border
                  bg-background
                  p-4
                  text-center
                "
              >
                <div className="text-xs text-muted-foreground">Stage</div>

                <div className="mt-2 font-medium">{step.title}</div>

                <div className="mt-3 h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{
                      width: `${(index + 1) * 20}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
