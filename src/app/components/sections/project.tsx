"use client";

import React from "react";
import { PROJECTS } from "@/app/common/constants";
import ProjectCard from "../ui/project-card";
import { motion, Variants } from "framer-motion";

/* ================= VARIANTS ================= */

const section: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const list: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.16,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

/* ================= COMPONENT ================= */

const ProjectsSection: React.FC = () => {
    return (
        <motion.section
            id="projects"
            variants={section}
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
          mb-8
          sm:mb-10
          md:mb-12
          uppercase
          tracking-wider
        "
            >
                Projects
            </motion.h2>

            {/* ===== PROJECT LIST ===== */}
            <motion.div
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="
          flex
          flex-col
          gap-10
          sm:gap-12
        "
            >
                {PROJECTS.map((project, index) => (
                    <motion.div key={project.id} variants={item}>
                        <ProjectCard project={project} index={index} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default ProjectsSection;
