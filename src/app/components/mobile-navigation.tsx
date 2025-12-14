"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { SectionName } from "../common/constants";

interface MobileNavigationProps {
    setSelectedSection: (section: SectionName) => void;
    selectedSection?: SectionName;
}

const menu: { id: SectionName; label: string }[] = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const MobileNavigation: React.FC<MobileNavigationProps> = ({
    setSelectedSection,
    selectedSection,
}) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (id: SectionName) => {
        setSelectedSection(id);
        setOpen(false);
    };

    return (
        <>
            {/* ===== HAMBURGER BUTTON ===== */}
            <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="
          lg:hidden
          fixed top-6 right-6 z-50
          bg-white border border-gray-300
          rounded-md p-2
          shadow-sm
        "
            >
                <Menu size={20} />
            </button>

            {/* ===== OVERLAY ===== */}
            <div
                className={`
          lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
                onClick={() => setOpen(false)}
            />

            {/* ===== SLIDE PANEL ===== */}
            <nav
                className={`
          lg:hidden
          fixed top-0 right-0 h-full w-64 z-50
          bg-white
          shadow-xl
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
            >
                {/* CLOSE BUTTON */}
                <div className="absolute top-5 right-5">
                    <button onClick={() => setOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                {/* ===== CENTER MENU ITEMS ===== */}
                <ul className="
          h-full
          flex flex-col items-center justify-center
          gap-8
          font-mono
          text-base
          tracking-widest
        ">
                    {menu.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => handleSelect(item.id)}
                                className={`
                  transition-colors
                  ${selectedSection === item.id
                                        ? "text-orange-500"
                                        : "text-gray-700 hover:text-orange-500"}
                `}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MobileNavigation;
