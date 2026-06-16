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
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    title: "Drivers",
    href: "/dashboard/drivers",
    icon: Truck,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
