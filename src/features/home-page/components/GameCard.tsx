"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export interface GameCardProps {
	title: string;
	description: string;
	href: string;
	icon: string;
	index?: number;
}

export const GameCard = (props: GameCardProps) => {
	const { title, description, href, icon, index = 0 } = props;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<article
			className="group relative flex flex-col rounded-xl bg-white p-6 shadow-lg shadow-black/5 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-2"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ animationDelay: `${index * 100}ms`, animation: "fadeInUp 0.5s ease-out forwards" }}>
			{/* Decorative gradient border on hover */}
			<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-300/0 to-primary-500/0 transition-all duration-300 group-hover:from-primary-300/10 group-hover:to-primary-500/10 pointer-events-none" />

			{/* Icon container */}
			<div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
				<img src={icon} alt="" className="h-6 w-6" loading="lazy" decoding="async" />
			</div>

			{/* Content */}
			<div className="relative flex flex-1 flex-col">
				<h3 className="font-title text-xl font-semibold tracking-tight text-gray-900">{title}</h3>
				<p className="mt-2 line-clamp-2 text-sm text-gray-600">{description}</p>
			</div>

			{/* CTA Button */}
			<Link
				href={href}
				className="relative mt-6 flex h-11 items-center justify-center gap-2 rounded-xl bg-primary-300 font-medium text-white transition-all duration-200 hover:bg-primary-500 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:scale-95"
				aria-label={`Play ${title}`}>
				Play
				<ArrowRight
					className={`h-4 w-4 transition-transform duration-200 ${isHovered ? "translate-x-0.5" : ""}`}
					aria-hidden="true"
				/>
			</Link>
		</article>
	);
};
