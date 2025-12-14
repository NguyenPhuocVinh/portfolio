import React from 'react';
import { Layers, Database, Box, FileJson, Code, Server, AppWindow, Cpu, Cloud, FileText, Zap, Search, GitBranch, Gitlab, Activity } from 'lucide-react';
import { TechStack, Experience, Project, BlogPost } from './types';

// Tech Stack Data
export const TECH_STACK: TechStack[] = [
    { name: 'JavaScript (ES6+)', icon: <FileJson size={18} className="text-yellow-500" /> },
    { name: 'TypeScript', icon: <Code size={18} className="text-blue-600" /> },
    { name: 'C#', icon: <FileText size={18} className="text-purple-600" /> },
    { name: 'NestJS', icon: <Layers size={18} className="text-red-500" /> },
    { name: 'NextJS', icon: <Server size={18} className="text-black" /> },
    { name: 'ReactJS', icon: <AppWindow size={18} className="text-cyan-500" /> },
    { name: 'NuxtJS', icon: <Zap size={18} className="text-green-500" /> },
    { name: 'NodeJS', icon: <Cpu size={18} className="text-green-600" /> },
    { name: 'MongoDB', icon: <Database size={18} className="text-green-400" /> },
    { name: 'PostgreSQL', icon: <Database size={18} className="text-blue-500" /> },
    { name: 'Redis', icon: <Database size={18} className="text-red-400" /> },
    { name: 'Elasticsearch', icon: <Search size={18} className="text-orange-500" /> },
    { name: 'Docker', icon: <Box size={18} className="text-blue-400" /> },
    { name: 'Git', icon: <GitBranch size={18} className="text-orange-600" /> },
    { name: 'GitLab', icon: <Gitlab size={18} className="text-orange-500" /> },
    { name: 'CI/CD', icon: <Activity size={18} className="text-purple-400" /> },
    { name: 'Basic AWS', icon: <Cloud size={18} className="text-orange-400" /> },
];


// Experience Data
export const EXPERIENCES: Experience[] = [
    {
        company: 'StartUp Korea',
        role: 'Backend Developer',
        period: 'Apr 2023 - Oct 2025',
        type: 'Full-time',
        logo: './images/startup.jpg',
        description: [
            'Developed a Web3 platform for wallet management, USDT payments, and P2P trading.',
            'Built backend services using Prisma and PostgreSQL, ensuring data consistency across all transactions.',
            'Implemented Redis for caching, background jobs, and concurrency-safe operations.',
            'Delivered real-time updates via SSE and WebSocket, integrating Telegram Mini App for notifications and trading.',
            'Designed and integrated Webhooks for partner systems to enable reliable real-time events.',
            'Containerized services with Docker and deployed multi-process architecture using PM2 for high reliability.',
            'Developed a social interaction platform integrated with the Web3 payment system, supporting posts, comments, and messaging.'
        ]
    },
    {
        company: 'MangoAds HCMC, VietNam',
        role: 'Backend Developer Intern',
        period: 'Sept 2024 – Feb 2025',
        type: 'Internship',
        logo: 'data:image/png;base64,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',
        description: [
            'Developed a social networking platform similar to Facebook, featuring user profiles, friend connections, groups, pages, posts, and events.',
            'Designed, developed, and maintained RESTful APIs using NestJS and NodeJS, ensuring scalable architecture and efficient data handling.',
            'Implemented real-time messaging and interactive features using Socket.io.',
            'Integrated AWS S3 for secure and scalable media storage, optimizing upload and retrieval performance.',
            'Containerized the application using Docker to maintain consistent development and deployment environments.',
            'Contributed to a Low-code Backend Platform project, writing database queries and designing data models to support dynamic API generation.'
        ],
    }
];


// Project Data
export const PROJECTS: Project[] = [
    {
        id: '1',
        number: '#01',
        title: 'CMS API',
        description: 'This project allows organizations with multiple groups to manage blog pages from a single system, instead of creating separate websites for each group.',
        image: './images/cms.jpg',
        imageType: 'desktop',
        link: 'https://github.com/NguyenPhuocVinh/cms',
    },
    {
        id: '2',
        number: '#02',
        title: 'ECOMMERCE API',
        description: 'This project is built to provide a complete solution for eCommerce platforms, including product management, order processing, and customer management.',
        image: './images/ecom.jpg',
        imageType: 'desktop',
        link: 'https://github.com/NguyenPhuocVinh/ecom',
    }
];

// Blog Data
export const BLOG_POSTS: BlogPost[] = [
    {
        title: 'Develop Book',
        tags: ['best-practices', 'frontend', 'backend', 'fullstack'],
        date: '25/09/2025',
        excerpt: 'This is an article about best practices in front-end and back-end development that I have gathered through research.',
        link: '#'
    },
    {
        title: 'Integration LangChain with Nodejs using MongoDB',
        tags: ['mongodb', 'nodejs', 'langchain'],
        date: '10/10/2024',
        excerpt: 'This article is about how to integrate LangChain with Nodejs using MongoDB.',
        link: '#'
    },
    {
        title: 'List questions to ask in a Building GenAI Apps',
        tags: ['mongodb', 'nodejs', 'atlas', 'vector', 'text-embedding'],
        date: '14/10/2024',
        excerpt: 'This article is about how to list questions to ask in a build GenAI application with MongoDB Atlas Vector Search.',
        link: '#'
    },
];

export type SectionName = "about" | "experience" | "projects" | "contact";