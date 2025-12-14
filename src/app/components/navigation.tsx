import React from "react";
import { SectionName } from "../common/constants";

interface NavigationProps {
    setSelectedSection: (section: SectionName) => void;
    selectedSection?: SectionName;
}

export const Navigation: React.FC<NavigationProps> = ({
    setSelectedSection,
    selectedSection,
}) => {
    const menu: { id: SectionName; label: string }[] = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="hidden lg:flex flex-col items-end gap-4 text-xs font-mono tracking-widest text-gray-500">
            {menu.map((item) => (
                <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedSection(item.id)}
                    className={`
            text-sm font-medium transition-colors relative pl-3
            hover:text-orange-500
            before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
            before:h-4 before:w-0.5 before:bg-orange-500
            ${selectedSection === item.id
                            ? "text-orange-500 before:opacity-100"
                            : "before:opacity-0"}
          `}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
};
