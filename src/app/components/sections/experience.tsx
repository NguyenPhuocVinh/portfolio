"use client";
import React, { useState } from "react";
import { EXPERIENCES } from "@/app/common/constants";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

/* ================= VARIANTS ================= */

const container: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
};

const descItem: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
};

/* ================= COMPONENT ================= */

const ExperienceSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeExp = EXPERIENCES[activeIndex];

    return (
        <motion.section
            id="experience"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
                font-mono
                scroll-mt-24
                pt-10
                sm:pt-12
                md:pt-20
                min-h-svh
            "
        >
            {/* ===== TITLE ===== */}
            <motion.h2
                variants={item}
                className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold
          text-gray-900
          mb-10
          uppercase
          tracking-wider
        "
            >
                Experience.
            </motion.h2>

            {/* ===== MAIN LAYOUT ===== */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                {/* ================= LEFT: LOGO SELECTOR ================= */}
                <div className="relative md:w-20">
                    {/* Timeline (desktop only) */}
                    <div
                        className="
              hidden md:block
              absolute left-8 top-0 h-full w-px
              bg-linear-to-b
              from-orange-200 via-orange-300 to-transparent
            "
                    />

                    <div
                        className="
              flex
              md:flex-col
              gap-6
              md:gap-10
              overflow-x-auto
              md:overflow-visible
              pb-2
            "
                    >
                        {EXPERIENCES.map((exp, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    whileHover={{ scale: 1.06 }}
                                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                                    className="
                    relative
                    group
                    flex
                    items-center
                    shrink-0
                  "
                                >
                                    {/* Active bar (desktop) */}
                                    <span
                                        className={`
                      hidden md:block
                      absolute -left-4 h-10 w-1 rounded-full
                      transition-all duration-300
                      ${isActive ? "bg-orange-500 opacity-100" : "opacity-0"}
                    `}
                                    />

                                    {/* Timeline dot (desktop) */}
                                    <span
                                        className={`
                      hidden md:block
                      absolute left-[30px] w-3 h-3 rounded-full
                      transition-all duration-300
                      ${isActive
                                                ? "bg-orange-500 scale-125 shadow-[0_0_0_6px_rgba(249,115,22,0.15)]"
                                                : "bg-gray-300"
                                            }
                    `}
                                    />

                                    {/* Logo */}
                                    <div
                                        className={`
                      relative
                      w-14 h-14 md:w-16 md:h-16
                      rounded-full overflow-hidden
                      flex items-center justify-center
                      transition-all duration-300
                      ${isActive
                                                ? "scale-110 border-2 border-orange-500 shadow-lg"
                                                : "border border-gray-200 opacity-70 group-hover:opacity-100"
                                            }
                    `}
                                    >
                                        {isActive && (
                                            <span className="absolute inset-0 bg-orange-400/10 blur-md rounded-full" />
                                        )}

                                        {exp.logo ? (
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                className="w-full h-full object-cover relative z-10"
                                            />
                                        ) : (
                                            <span className="font-bold text-lg relative z-10">
                                                {exp.company[0]}
                                            </span>
                                        )}
                                    </div>

                                    {/* Tooltip (desktop only) */}
                                    <span
                                        className="
                      hidden md:block
                      absolute left-24 whitespace-nowrap
                      text-xs font-medium
                      bg-gray-900 text-white px-3 py-1 rounded
                      opacity-0 translate-x-2
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-300
                      pointer-events-none
                    "
                                    >
                                        {exp.company}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* ================= RIGHT: CONTENT ================= */}
                <div className="flex-1 max-w-full md:max-w-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            variants={item}
                            initial="hidden"
                            animate="show"
                            exit={{ opacity: 0, y: -8 }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                {activeExp.role}
                            </h3>

                            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
                                <span className="text-orange-500 font-semibold">
                                    #{activeExp.company}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {activeExp.period}
                                </span>
                                {activeExp.type && (
                                    <span className="text-xs px-2 py-1 rounded bg-gray-100">
                                        {activeExp.type}
                                    </span>
                                )}
                            </div>

                            <motion.div
                                className="space-y-4"
                                initial="hidden"
                                animate="show"
                                variants={{
                                    show: { transition: { staggerChildren: 0.08 } },
                                }}
                            >
                                {activeExp.description.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={descItem}
                                        className="flex gap-3 items-start"
                                    >
                                        <Play
                                            size={10}
                                            className="text-orange-500 mt-1.5 shrink-0 fill-current"
                                        />
                                        <p
                                            className="text-gray-700 text-sm leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: item }}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default ExperienceSection;
