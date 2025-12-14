"use client";
import React from "react";
import { ExternalLink } from "lucide-react";
import { TECH_STACK } from "@/app/common/constants";
import { motion, Variants } from "framer-motion";

/* ================= VARIANTS ================= */

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            className="
                min-h-svh
                scroll-mt-24
                pt-16
                sm:pt-14
                md:pt-20
                font-mono
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
                    mb-8
                    sm:mb-10
                    md:mb-12
                    uppercase
                    tracking-wider
                    text-center
                    md:text-left
                "
            >
                About Me
            </motion.h2>

            {/* ===== DESCRIPTION ===== */}
            <motion.p
                variants={item}
                className="
    text-gray-700
    leading-relaxed
    mb-8
    sm:mb-10
    text-sm
    sm:text-base
    md:text-lg
    text-center
    md:text-left
  "
            >
                Passionate and research-oriented <strong className="text-gray-900">Fullstack Engineer</strong> dedicated to building
                high-quality, <strong className="text-gray-900">scalable software solutions</strong>. Possesses a versatile skillset capable of bridging
                <strong className="text-gray-900">Backend logic</strong> and <strong className="text-gray-900">Frontend architecture</strong> to solve complex
                engineering challenges. Committed to <strong className="text-gray-900">continuous professional growth</strong> by actively exploring
                <strong className="text-gray-900">emerging technologies</strong>, analyzing open-source repositories, and applying best practices to deliver
                efficient, maintainable code.
            </motion.p>

            {/* ===== TECH STACK ===== */}
            <motion.div
                variants={item}
                className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            gap-4
            sm:gap-5
            mb-10
          "
            >
                {TECH_STACK.map((tech, i) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: i * 0.05,
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        viewport={{ once: true }}
                        className="
                flex
                items-center
                gap-3
                text-sm
              "
                    >
                        <span className="p-1.5 bg-gray-100 rounded">
                            {tech.icon}
                        </span>
                        <span className="font-medium text-gray-700">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>

            {/* ===== LINK ===== */}
            {/* <motion.div
                variants={item}
                className="text-center md:text-left"
            >
                <motion.a
                    href="#"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="
              inline-flex
              items-center
              gap-1
              text-orange-500
              hover:text-orange-600
              font-medium
              text-sm
            "
                >
                    See my full skills
                    <ExternalLink size={14} />
                </motion.a>
            </motion.div> */}
        </section>
    );
};

export default AboutSection;
