export interface TechStack {
    name: string;
    icon: React.ReactNode;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    type: string;
    logo: string;
    description: string[];
}

export interface Project {
    id: string;
    number: string;
    title: string;
    description: string;
    image: string;
    imageType: 'desktop' | 'mobile'; // To style the frame differently
    link: string;
}

export interface BlogPost {
    title: string;
    tags: string[];
    date: string;
    excerpt: string;
    link: string;
}
