"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Laundrix suitable for small laundry businesses?",
    answer:
      "Yes. Whether you're operating a single store or managing multiple locations, Laundrix scales with your business needs.",
  },
  {
    question: "Can I migrate from my existing laundry software?",
    answer:
      "Absolutely. Our team provides migration assistance to help move customers, orders, pricing, and operational data with minimal downtime.",
  },
  {
    question: "Does Laundrix support pickup and delivery operations?",
    answer:
      "Yes. You can manage pickups, deliveries, route assignments, driver tracking, and customer notifications from a single dashboard.",
  },
  {
    question: "Do you provide mobile apps?",
    answer:
      "Yes. Dedicated mobile applications are available for store operators, delivery staff, and customers.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most businesses are fully operational within a few days. Larger multi-store deployments may require additional configuration and training.",
  },
  {
    question: "What support do you offer?",
    answer:
      "We provide onboarding assistance, documentation, priority support, and dedicated account management for enterprise customers.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
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
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Frequently Asked
            <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* FAQ Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            mx-auto
            mt-16
            max-w-4xl
            rounded-3xl
            border
            bg-card/70
            p-4
            backdrop-blur
          "
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-border px-4"
              >
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}