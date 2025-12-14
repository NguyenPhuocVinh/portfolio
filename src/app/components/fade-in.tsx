import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    direction?: 'up' | 'left' | 'right';
    className?: string;
    delay?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    direction = 'up',
    className = '',
    delay = 0
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    let translateClass = 'translate-y-[30px]';
    if (direction === 'left') translateClass = '-translate-x-[30px]';
    if (direction === 'right') translateClass = 'translate-x-[30px]';

    const activeClass = isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translateClass}`;

    // Mapping delay number to Tailwind class if needed, or inline style
    const style = { transitionDelay: `${delay}ms` };

    return (
        <div
            ref={domRef}
            className={`transition-all duration-700 ease-[cubic-bezier(0.5,0,0,1)] ${activeClass} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};