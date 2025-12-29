
import React from 'react';
import { Layout, Globe, ShoppingBag, Megaphone, Palette, TrendingUp, Code } from 'lucide-react';
import { Project, Service, Skill, Package } from './types';

// Restored specific Fiverr portfolio image URLs as requested by the user
const PROJECT_IMAGES = {
  metaAds: "https://url-shortener.me/5K3I",
  shopify: "https://url-shortener.me/5KF9",
  wordpress: "https://url-shortener.me/5KFB"
};

export const SERVICES: Service[] = [
  {
    title: "Meta Ads Expert (FB & IG)",
    description: "My core expertise. I manage full-funnel Facebook and Instagram ad campaigns, from creative strategy to technical scaling, ensuring maximum ROI for your brand.",
    icon: <Megaphone className="w-6 h-6" />
  },
  {
    title: "Shopify Store Design",
    description: "Building professional e-commerce stores on Shopify that are optimized for sales and designed to integrate perfectly with your ad funnels.",
    icon: <ShoppingBag className="w-6 h-6" />
  },
  {
    title: "WordPress Development",
    description: "Creating flexible, fast, and SEO-friendly websites on WordPress. Ideal for businesses that need total control over their content and branding.",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "Custom HTML/CSS/JS",
    description: "Providing custom-coded solutions for unique layouts. I use my technical knowledge to build or tweak sites that go beyond standard templates.",
    icon: <Code className="w-6 h-6" />
  }
];

const PORTFOLIO_LINK = "https://www.fiverr.com/users/ecomspecialixst/portfolio/NjhkODRiNzBmNzJkY2QwMDAxZTlhYWE3";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Meta Ads Scaling Campaign",
    description: "Managed and optimized Meta Ads campaigns for clients, driving leads, sales, and brand awareness with data-driven strategies.",
    longDescription: "A comprehensive advertising project focused on aggressive ROI scaling. I implemented advanced CAPI (Conversions API) tracking, custom audience segmentation, and multi-variant creative testing. The results included a significant drop in CPA and a sustainable increase in monthly revenue.",
    image: PROJECT_IMAGES.metaAds,
    category: "Meta Ads",
    externalLink: PORTFOLIO_LINK
  },
  {
    id: 2,
    title: "Custom Shopify Ecosystem",
    description: "Designed and developed Shopify stores optimized for sales, user experience, and mobile responsiveness.",
    longDescription: "Developed a high-converting Shopify storefront from the ground up. This involved custom Liquid coding for unique product page layouts, integration of upsell apps, and rigorous speed optimization.",
    image: PROJECT_IMAGES.shopify,
    category: "Shopify + Ads",
    externalLink: PORTFOLIO_LINK
  },
  {
    id: 3,
    title: "Corporate WordPress Hub",
    description: "Built WordPress websites with modern design, responsive layout, and SEO-friendly structure.",
    longDescription: "A professional service-based website built on WordPress. I focused on technical SEO and user journey mapping to ensure visitors are funneled towards high-intent actions.",
    image: PROJECT_IMAGES.wordpress,
    category: "WordPress",
    externalLink: PORTFOLIO_LINK
  }
];

export const SKILLS: Skill[] = [
  { name: "Meta (FB/IG) Ads Strategy", level: 98 },
  { name: "Shopify Development", level: 95 },
  { name: "WordPress Design", level: 92 },
  { name: "HTML5 & CSS3 Coding", level: 85 },
  { name: "JavaScript Interactivity", level: 75 },
  { name: "Ad Creative & ROAS Scaling", level: 90 }
];

export const ADS_PACKAGES: Package[] = [
  {
    name: "Basic Ads",
    price: "$49",
    description: "Essential setup for startups to start testing Meta platforms.",
    features: [
      "Pixel Setup & CAPI",
      "1 Targeted Campaign",
      "Standard Ad Copy",
      "Basic Audience Research",
      "Email Reporting"
    ]
  },
  {
    name: "Professional Ads",
    price: "$99",
    description: "Optimized management to drive real sales and consistent leads.",
    features: [
      "Everything in Basic",
      "Advanced Retargeting",
      "A/B Testing (2 Ads)",
      "Daily Monitoring",
      "WhatsApp Support"
    ],
    recommended: true
  },
  {
    name: "Advanced Ads",
    price: "$199",
    description: "Full scale dominance with aggressive growth strategy.",
    features: [
      "Everything in Pro",
      "Infinite Scaling Strategy",
      "Creative Concept Design",
      "Deep Competitor Analysis",
      "Priority Management"
    ]
  }
];

export const WEB_PACKAGES: Package[] = [
  {
    name: "Basic Web",
    price: "$79",
    description: "A fast, conversion-focused landing page for your brand.",
    features: [
      "Modern Single Page",
      "Mobile Optimized",
      "Contact Form Setup",
      "Speed Performance",
      "SEO Ready"
    ]
  },
  {
    name: "Professional Web",
    price: "$149",
    description: "Complete business presence with custom-tailored branding.",
    features: [
      "Up to 3 Main Pages",
      "Custom UI Design",
      "Shopify/WP Setup",
      "Social Integrations",
      "Brand Color Palette"
    ],
    recommended: true
  },
  {
    name: "Advanced Web",
    price: "$299",
    description: "Full-scale E-commerce hub with premium features.",
    features: [
      "Up to 6 Premium Pages",
      "Full Product Checkout",
      "Interactive Elements",
      "Premium Plugin Setup",
      "Lifetime Ownership"
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "He managed our Facebook and Instagram ads with a clear strategy. Targeting and creatives were well planned, and we saw an improvement in lead quality. Communication was consistent and professional.",
    author: "Jenny R.",
    location: "New York, USA",
    service: "Meta Ads Management",
    rating: 5,
    category: "Meta Ads"
  },
  {
    quote: "The website was delivered exactly as discussed. Clean design, fast loading, and fully responsive. He was easy to work with and handled revisions smoothly.",
    author: "Markus L.",
    location: "London, United Kingdom",
    service: "Website Design & Development",
    rating: 5,
    category: "Website Development"
  },
  {
    quote: "He supported us with both website development and Meta ad setup. Everything was structured well, and timelines were respected. A reliable and skilled professional.",
    author: "Daniel S.",
    location: "Toronto, Canada",
    service: "Website & Meta Ads",
    rating: 5,
    category: "Meta Ads + Website"
  }
];
