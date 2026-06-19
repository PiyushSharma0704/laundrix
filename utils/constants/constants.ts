// constants

const testimonials = [
  {
    name: "Gaurav Nigam",
    company: "Tumble Dry",
    quote: "We scaled to 1,500+ stores using the platform.",
  },
  {
    name: "Mike Gleave",
    company: "Speediwash",
    quote: "One of the best decisions we made.",
  },
];

import {
  BarChart3,
  Truck,
  MessageCircle,
  Users,
  Shirt,
  CreditCard,
  Calendar,
  ShieldCheck,
  PackageCheck,
  LayoutDashboard,
  ShoppingBag,
  Settings,
  Tags,
  Sparkles,
  BookOpen,
} from "lucide-react";

export const features = [
  {
    title: "Garment Tracking",
    description:
      "Track every garment from intake to delivery with QR-based tracking.",
    icon: Shirt,
  },
  {
    title: "Pickup & Delivery",
    description:
      "Automate pickups, deliveries, and route assignments effortlessly.",
    icon: Truck,
  },
  {
    title: "Customer CRM",
    description:
      "Store customer preferences, history, and communication records.",
    icon: Users,
  },
  {
    title: "WhatsApp Automation",
    description: "Send order updates, invoices, and reminders automatically.",
    icon: MessageCircle,
  },
  {
    title: "Digital Payments",
    description:
      "Accept UPI, cards, wallets, and track payment reconciliation.",
    icon: CreditCard,
  },
  {
    title: "Business Analytics",
    description:
      "Monitor revenue, orders, customer retention, and performance.",
    icon: BarChart3,
  },
];

export const steps = [
  {
    title: "Schedule Pickup",
    description:
      "Customers book pickups through WhatsApp, mobile app, or website.",
    icon: Calendar,
  },
  {
    title: "Pickup & Collection",
    description:
      "Drivers receive assignments and collect garments from customers.",
    icon: Truck,
  },
  {
    title: "Processing & Cleaning",
    description:
      "Track garments through washing, dry cleaning, ironing, and packing.",
    icon: Shirt,
  },
  {
    title: "Quality Assurance",
    description: "Perform quality checks before garments are marked ready.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery & Feedback",
    description: "Deliver orders and automatically collect customer feedback.",
    icon: PackageCheck,
  },
];

export const navSections = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "Operations",
    items: [
      {
        title: "Stores",
        href: "/stores",
        icon: PackageCheck,
      },
      {
        title: "Customers",
        href: "/customers",
        icon: Users,
      },
      {
        title: "Orders",
        href: "/orders",
        icon: ShoppingBag,
      },
      {
        title: "Drivers",
        href: "/drivers",
        icon: Truck,
      },
    ],
  },

  {
    title: "Catalog",
    items: [
      {
        title: "Garment Categories",
        href: "/catalog/garment-categories",
        icon: Tags,
      },
      {
        title: "Garment Types",
        href: "/catalog/garment-types",
        icon: Shirt,
      },
      {
        title: "Service Types",
        href: "/catalog/service-types",
        icon: Sparkles,
      },
      {
        title: "Service Catalog",
        href: "/catalog/service-catalog",
        icon: BookOpen,
      },
    ],
  },

  {
    title: "Finance",
    items: [
      {
        title: "Billing",
        href: "/billing",
        icon: CreditCard,
      },
    ],
  },

  {
    title: "System",
    items: [
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];

export const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Stores",
    href: "/stores",
    icon: PackageCheck,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingBag,
  },
  {
    title: "Drivers",
    href: "/drivers",
    icon: Truck,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
