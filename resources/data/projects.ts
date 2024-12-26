
import { Globe } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const projects = [
    {
        name: 'Cognova AI',
        image: '/images/projects/cognova-ai.png',
        video: '',
        href: 'https://app.cognova.io',
        links: [
            {
                type: "Website",
                href: "https://app.cognova.io",
                icon: Globe,
            },
        ],
        dates: "October 2024 - Present",
        active: true,
        tags: ['Next.JS', 'FastAPI', 'Prisma', 'Cloudflare AI Worker', 'Neon Postgres', 'pgVector', 'Appwrite'],
        description:
            'Cognova AI is an AI-driven chat platform that helps businesses provide instant responses to customer inquiries across various channels, such as websites and WhatsApp. It learns from business documents and data to deliver accurate and relevant information, while also offering advanced analytics and knowledge base management.',
    },
    {
        name: 'Movo+',
        image: '/images/projects/movo+.svg',
        video: '',
        href: 'https://movoplus.com/vendors',
        links: [
            {
                type: "Website",
                href: "https://movoplus.com",
                icon: Globe,
            },
        ],
        dates: "Jun 2024 - Sept 2024",
        active: true,
        tags: ['Next.JS', 'Django', 'Tailwindcss', 'Shadcn UI', 'Typescript', 'Stripe'],
        description:
            'Global marketplace for sellers of T-shirts & Shoes this platform was built to help the sellers who want to receive payments of their products all around world online using Stripe payment',
    },
    {
        name: 'Definitive+',
        image: '/images/projects/definitive+.png',
        video: '',
        href: 'https://definitiveplus.vercel.app/',
        links: [
            {
                type: "Website",
                href: "https://definitiveplus.vercel.app/",
                icon: Globe,
            },
        ],
        dates: "Sept 2024 - Present",
        active: true,
        tags: ['Next.JS', 'Prisma', 'Tailwindcss', 'Shadcn UI', 'Typescript', 'Redis', 'Postgresql'],
        description:
            'Definitive+ was created to assist users from Rwanda in securing driving test spots. Simply select the district where you would like to take the test, and the system continuously monitors availability in that area. Once a slot becomes available, The user receives a message guiding them to book their spot on the official Irembo platform (irembo.gov.rw).',
    },
    {
        name: 'Jeezy',
        image: '/images/projects/jeezy.svg',
        video: '',
        href: 'https://jeezy.vercel.app',
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
        tags: ['Next.JS', 'Django', 'Shadcn UI', 'Typescript', 'Tailwindcss',],
        description:
            'Jeezy is a hosting platform similar to Vercel, allowing users to deploy their websites for free from github repositories.',
    },
    {
        name: 'iBot',
        image: '/images/projects/ibot.png',
        video: '',
        href: 'https://github.com/Iranzithierry/ibot-mobile-app/',
        links: [
            {
                type: "Source",
                href: "https://github.com/Iranzithierry/ibot-mobile-app/",
                icon: GitHubLogoIcon,
            },
        ],
        dates: "",
        active: true,
        tags: ['React Native', 'Tailwindcss', 'Flask'],
        description:
            'The iBot is  Chatbot application developed with React Native, tailored specifically to facilitate conversations in the Kinyarwanda language. This innovative chatbot harnesses the power of a self API derived from a comprehensive Kinyarwanda dialogue dataset',
    },
    {
        name: 'eSound',
        image: '/images/projects/e-sound.png',
        video: '',
        href: 'https://e-sound.onrender.com/',
        links: [
            {
                type: "Website",
                href: "https://e-sound.onrender.com/",
                icon: Globe,
            },
        ],
        dates: "",
        active: true,
        tags: ['Python', 'Flask', 'Bootstrap', 'Javascript'],
        description:
            'Python-powered music downloader and player efficiently crawls user-provided YouTube links, extracting and converting audio into MP3 format, offering a user-friendly interface for downloading and playing music, with scalability to accommodate up to 1K users concurrently.',
    },
];