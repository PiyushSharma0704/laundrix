"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Gaurav Nigam",
    role: "CEO",
    company: "Tumble Dry",
    quote:
      "We've scaled from a single store to more than 1,500 locations using the platform. It has completely transformed how we operate.",
    metric: "1,500+ Locations",
  },
  {
    name: "Mike Gleave",
    role: "Owner",
    company: "Speediwash",
    quote:
      "One of the best business decisions we've made. Reliable, intuitive and backed by an incredible support team.",
    metric: "11+ Years Customer",
  },
  {
    name: "Khushboo & Vikas",
    role: "Founders",
    company: "Revivo",
    quote:
      "The software streamlined our operations and significantly improved customer retention. The ROI was visible within weeks.",
    metric: "33% Revenue Growth",
  },
];
export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
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
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Loved by Laundry
            <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Business Owners
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Thousands of laundry businesses trust Laundrix to
            streamline operations and accelerate growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
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
              {/* Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-32
                  w-32
                  rounded-full
                  bg-primary/10
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg leading-relaxed text-foreground">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Footer */}
              <div className="mt-8 border-t pt-6">
                <div className="font-semibold">
                  {testimonial.name}
                </div>

                <div className="text-sm text-muted-foreground">
                  {testimonial.role} · {testimonial.company}
                </div>

                <div
                  className="
                    mt-4
                    inline-flex
                    rounded-full
                    bg-primary/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-primary
                  "
                >
                  {testimonial.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-20
            grid
            grid-cols-2
            gap-8
            border-t
            pt-12
            md:grid-cols-4
          "
        >
          <div className="text-center">
            <div className="text-4xl font-bold">5,000+</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Locations
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold">22+</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Countries
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold">20,000+</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Daily Users
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold">99.9%</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Uptime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}