"use client";
import React from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* ================= VARIANTS ================= */
const section: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2,
        },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
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
const ContactSection: React.FC = () => {
    return (
        <motion.section
            id="contact"
            variants={section}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="  font-mono
                scroll-mt-24
                pt-10
                sm:pt-12
                md:pt-20
                min-h-svh"
        >
            {/* ===== TITLE ===== */}
            <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 uppercase tracking-wider text-center"
            >
                Contact.
            </motion.h2>

            {/* ===== CONTENT STACK ===== */}
            <motion.div variants={fadeUp} className="space-y-8 max-w-xl mx-auto">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-center">
                    Feel free to reach out if you want to collaborate, have a question, or just want to say hello 👋
                    <br />
                    I’m always open to discussing new opportunities.
                </p>

                <div className="space-y-4 text-center">
                    <a
                        href="mailto:nguyenphuocvinh.0302@gmail.com"
                        className="flex items-center justify-center gap-3 sm:gap-4 group mx-auto"
                    >
                        <Mail className="text-orange-500 shrink-0" size={18} />
                        <span className="text-gray-800 text-sm sm:text-base group-hover:underline">
                            nguyenphuocvinh.0302@gmail.com
                        </span>
                    </a>

                    <div className="flex items-center justify-center gap-3 sm:gap-4 mx-auto">
                        <MapPin className="text-orange-500 shrink-0" size={18} />
                        <span className="text-gray-800 text-sm sm:text-base">
                            Ho Chi Minh City, Vietnam
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default ContactSection;
