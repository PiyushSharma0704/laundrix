// SEO Configuration
export const siteURL = process.env.NEXT_PUBLIC_BASE_URL;
export const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";

const siteConfig = {
  name: "Laundrix",

  title: "Laundrix - Modern Laundry & Dry Cleaning Management Software",

  description:
    "Manage orders, customers, pickup & delivery, garment tracking, payments, WhatsApp automation, and analytics from one powerful platform built for modern laundry businesses.",

  url: siteURL,

  ogImage: `${siteURL}/og-image.png`,

  favicon: `${siteURL}/favicon.ico`,

  keywords: [
    "laundry software",
    "dry cleaning software",
    "laundry management system",
    "laundry POS",
    "garment tracking",
    "pickup and delivery software",
    "laundry CRM",
    "laundromat software",
    "whatsapp automation",
    "Laundrix",
  ],

  author: "FabricFlow",

  social: {
    twitter: "https://x.com/fabricflow",
    linkedin: "https://linkedin.com/company/fabricflow",
  },
};

export default siteConfig;
