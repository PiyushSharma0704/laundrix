"use client";

import { motion } from "framer-motion";

const companies = [
  "TumbleDry",
  "Revivo",
  "LaundryLab",
  "FabricCare",
  "WashX",
  "FreshCo",
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by
          </p>

          <h3 className="mt-3 text-xl font-semibold text-foreground">
            5,000+ Laundry Locations Across 22 Countries
          </h3>
        </motion.div>

        <div className="relative mt-12 overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />

          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex min-w-max gap-16"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-semibold
                  text-muted-foreground
                  transition-colors
                  hover:text-foreground
                "
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t pt-12 md:grid-cols-4">
          <div className="text-center">
            <h4 className="text-3xl font-bold">5,000+</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Laundry Locations
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold">22+</h4>
            <p className="mt-2 text-sm text-muted-foreground">Countries</p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold">20,000+</h4>
            <p className="mt-2 text-sm text-muted-foreground">Daily Users</p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold">12+</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
