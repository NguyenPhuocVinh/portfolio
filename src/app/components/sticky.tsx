"use client";

import React from "react";
import { Linkedin, Github, Facebook } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* ================= VARIANTS ================= */

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delay: 0.25,
			staggerChildren: 0.18,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, x: -20 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

/* ================= COMPONENT ================= */

const StickySidebar = () => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="
        w-full h-full
        flex flex-col
        pt-16
        px-6
        sm:px-10
        lg:px-20
        font-mono
        relative
      "
		>
			{/* ===== Decorative SVG (desktop only) ===== */}
			<motion.div
				className="absolute top-16 left-72 w-full h-[520px] pointer-events-none z-0 hidden lg:block"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.45 }}
				transition={{ delay: 0.2, duration: 1 }}
			>
				<svg
					viewBox="0 0 1440 900"
					fill="none"
					className="w-full h-full"
					preserveAspectRatio="none"
				>
					<path
						d="M 212 -152 C 658 58 500 550 280 745"
						stroke="#f97316"
						strokeWidth="7"
					/>
				</svg>
			</motion.div>

			{/* ================= TOP CONTENT ================= */}
			<div className="z-10">
				<motion.h1
					variants={item}
					className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900"
				>
					NGUYEN PHUOC
				</motion.h1>

				<motion.h1
					variants={item}
					className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-orange-500 mb-6"
				>
					VINH.
				</motion.h1>

				<motion.h2
					variants={item}
					className="text-base sm:text-lg font-bold text-orange-400 mb-6"
				>
					Software Developer
				</motion.h2>

				<motion.p
					variants={item}
					className="
            text-sm sm:text-base
            text-gray-700
            max-w-full lg:max-w-xs
            leading-relaxed
          "
				>
					Hey! How nice of you to look at my personal site,{" "}
					<span className="text-orange-500">thank you!</span>
					<br />
					I am a Software Developer specializing in backend APIs, frontend
					integration, and currently exploring Gen AI.
				</motion.p>
			</div>


			{/* ================= CENTER CTA + SOCIAL ================= */}
			<motion.div
				variants={item}
				className="
    z-10
    flex flex-col
    items-center
    gap-5
    mt-12
    lg:mt-0
    mb-14
  "
			>
				{/* CTA */}
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="
					mt-10
						bg-white
						border border-gray-300
						px-6 py-3
						rounded-md
						shadow-sm
						text-sm	
						font-medium
						flex items-center gap-1
						hover:border-orange-400
						hover:text-orange-500
						transition-colors
					"
				>
					👋 Welcome
				</motion.button>

				{/* SOCIAL */}
				<div className="flex gap-5">
					{[
						{ Icon: Linkedin, href: 'https://www.linkedin.com/in/nguy%E1%BB%85n-ph%C6%B0%E1%BB%9Bc-v%C4%A9nh-23628330a/' },
						{ Icon: Github, href: 'https://github.com/NguyenPhuocVinh' }
					].map((item, i) => (
						<motion.a
							key={i}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="social link"
							whileHover={{ y: -4, color: "#f97316" }}
							transition={{ type: "spring", stiffness: 300 }}
							className="text-gray-800 hover:text-orange-500 transition-colors"
						>
							<item.Icon size={22} />
						</motion.a>
					))}
				</div>

			</motion.div>

		</motion.div>
	);
};

export default StickySidebar;
