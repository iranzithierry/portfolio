import { Globe } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const projects = [
  {
    name: "Cognova AI",
    image: "/images/projects/cognova-ai.png",
    acquired: true,
    video: "",
    href: "https://cognova.io?ref=portfolio&from=https://iranzi.dev/projects",
    links: [
      {
        type: "Website",
        href: "https://cognova.io?ref=portfolio&from=https://iranzi.dev/projects",
        icon: Globe,
      },
    ],
    dates: "October 2024 - March 2025",
    active: true,
    tags: [
      "Next.JS",
      "Python",
      "Tailwindcss",
      "Prisma",
      "Cloudflare AI Worker",
      "Neon Postgres",
      "pgVector",
      "Appwrite",
    ],
    description:
      "Cognova AI is an AI-driven chat platform that helps businesses provide instant responses to customer inquiries across various channels, such as websites and WhatsApp. It learns from business documents and data to deliver accurate and relevant information, while also offering advanced analytics and knowledge base management.",
  },
  {
    name: "Rewrite AI",
    image: "/images/projects/rewrite-ai.png",
    video: "",
    href: "https://rewrite.iranzi.dev?ref=portfolio&from=https://iranzi.dev/projects",
    links: [
      {
        type: "Website",
        href: "https://rewrite.iranzi.dev?ref=portfolio&from=https://iranzi.dev/projects",
        icon: Globe,
      },
    ],
    dates: "May 12 2025 - May 14 2025",
    active: true,
    tags: [
      "Next.JS",
      "Tailwindcss",
      "Prisma",
      "Better-Auth",
      "Neon Postgres",
      "TailArk",
      "Shadcn UI",
    ],
    description:
      "Rewrite AI is this dope ML-powered app that takes AI posts, boring emails, DMs, or even viral stuff and flips it into your own vibe. Wanna make it sound Gen Z? Just snag any celeb content, paste it in, and boom, you're set! 🔥💬",
  },
  {
    name: "Prostack",
    image:
      "https://ueuyztalzbxumzeowndw.supabase.co/storage/v1/object/sign/pictures/prostack.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaWN0dXJlcy9wcm9zdGFjay5wbmciLCJpYXQiOjE3NDQyODExMTMsImV4cCI6MTc3NTgxNzExM30.rOnoKsG6Xyr_4VFfael-lGUGl2gWiQdMwgL0WEwmTJA",
    video: "",
    href: "https://prostack.cc?ref=portfolio&from=https://iranzi.dev/projects",
    links: [
      {
        type: "Website",
        href: "https://prostack.cc?ref=portfolio&from=https://iranzi.dev/projects",
        icon: Globe,
      },
    ],
    dates: "February 5 2025 - February 8 2025",
    active: true,
    tags: ["Next.JS", "Better Auth", "Prisma", "Resend", "Neon Postgres", "Lemonsqueezy"],
    description:
      "ProStack is a complete Next.js 15 starter kit for building saas apps fast! It comes with production-ready authentication, billing, team and more all wrapped in a fast, secure and responsive design. Plus, it's super easy to customize with just two config files.",
  },
  {
    name: "FlashDB (Redis)",
    image: "https://www.svgrepo.com/show/303460/redis-logo.svg",
    video: "",
    href: "https://github.com/iranzithierry/redis-alternative",
    links: [
      {
        type: "Source",
        href: "https://github.com/iranzithierry/redis-alternative",
        icon: GitHubLogoIcon,
      },
    ],
    dates: "January 2025 - January 2025",
    active: true,
    tags: ["Rust", "Javascript"],
    description:
      "A lightweight Redis-like key-value database built in Rust with it's own JS client with 0 dependency.",
  },
  {
    name: "Dashkombat",
    image: "/images/projects/placeholder.png",
    video: "",
    href: "https://dashkombat.vercel.app/?ref=portfolio&from=https://iranzi.dev/projects",
    links: [
      {
        type: "Website",
        href: "https://dashkombat.vercel.app/?ref=portfolio&from=https://iranzi.dev/projects",
        icon: Globe,
      },
    ],
    dates: "Jan 24 2025 - Feb 2 2025",
    active: true,
    tags: ["Next.JS", "Tailwindcss", "Prisma", "Better-Auth", "Neon Postgres", "Hono.JS", "BullMQ"],
    description:
      "Dashkombat was my take on the popular Hamsterkombat game on Telegram, where you tap to earn coins. I tried to bring in the same features, but with some extras like cheat detection, which took me hours to figure out. I also worked on keeping server loads low by batching clicks and stuff. 😅🎮",
  },
  {
    name: "Movo+",
    image: "/images/projects/movo+.svg",
    video: "",
    href: "https://movoplus.com/vendors",
    links: [
      {
        type: "Website",
        href: "https://movoplus.com",
        icon: Globe,
      },
    ],
    dates: "Jun 2024 - Sept 2024",
    active: true,
    tags: ["Next.JS", "Django", "Tailwindcss", "Shadcn UI", "Typescript", "Stripe"],
    description:
      "Global marketplace for sellers of T-shirts & Shoes this platform was built to help the sellers who want to receive payments of their products all around world online using Stripe payment",
  },
  {
    name: "Definitive+",
    image: "/images/projects/definitive+.png",
    video: "",
    href: "https://definitiveplus.vercel.app/",
    links: [
      {
        type: "Website",
        href: "https://definitiveplus.vercel.app/",
        icon: Globe,
      },
    ],
    dates: "Sept 2024 - October 2024",
    active: true,
    tags: ["Next.JS", "Prisma", "Tailwindcss", "Shadcn UI", "Typescript", "Redis", "Postgresql"],
    description:
      "Definitive+ was created to assist users from Rwanda in securing driving test spots. Simply select the district where you would like to take the test, and the system continuously monitors availability in that area. Once a slot becomes available, The user receives a message guiding them to book their spot on the official Irembo platform (irembo.gov.rw).",
  },
  {
    name: "Photogen",
    image: "/images/projects/placeholder.png",
    video: "",
    href: "https://photogen.vercel.app/?ref=portfolio&from=https://iranzi.dev/projects",
    links: [
      {
        type: "Website",
        href: "https://photogen.vercel.app/?ref=portfolio&from=https://iranzi.dev/projects",
        icon: Globe,
      },
    ],
    dates: "Jan 0 2025 - Feb 3 2025",
    active: true,
    tags: ["Next.JS", "Tailwindcss", "Prisma", "Better-Auth", "Shadcn"],
    description:
      "Photogen is a straightforward template I made for an image generation app back when Ghibli-style images were all the rage!",
  },
  {
    name: "Jeezy",
    image: "/images/projects/jeezy.svg",
    video: "",
    href: "https://jeezy.vercel.app",
    links: [
      {
        type: "Website",
        href: "https://jeezy.vercel.app",
        icon: Globe,
      },
      {
        type: "Source",
        href: "https://github.com/iranzithierry/jeezy",
        icon: GitHubLogoIcon,
      },
    ],
    dates: "",
    active: true,
    tags: ["Next.JS", "Django", "Shadcn UI", "Typescript", "Tailwindcss"],
    description:
      "Jeezy is a hosting platform similar to Vercel, allowing users to deploy their websites for free from github repositories.",
  },
  {
    name: "iBot",
    image: "/images/projects/ibot.png",
    video: "",
    href: "https://github.com/Iranzithierry/ibot-mobile-app/",
    links: [
      {
        type: "Source",
        href: "https://github.com/Iranzithierry/ibot-mobile-app/",
        icon: GitHubLogoIcon,
      },
    ],
    dates: "",
    active: true,
    tags: ["React Native", "Tailwindcss", "Flask"],
    description:
      "The iBot is  Chatbot application developed with React Native, tailored specifically to facilitate conversations in the Kinyarwanda language. This innovative chatbot harnesses the power of a self API derived from a comprehensive Kinyarwanda dialogue dataset",
  },
  {
    name: "eSound",
    image: "/images/projects/e-sound.png",
    video: "",
    href: "https://e-sound.onrender.com/",
    links: [
      {
        type: "Source",
        href: "https://github.com/iranzithierry/e-sound",
        icon: GitHubLogoIcon,
      },
    ],
    dates: "",
    active: true,
    tags: ["Python", "Flask", "Bootstrap", "Javascript"],
    description:
      "Python-powered music downloader and player efficiently crawls user-provided YouTube links, extracting and converting audio into MP3 format, offering a user-friendly interface for downloading and playing music, with scalability to accommodate up to 1K users concurrently.",
  },
];
