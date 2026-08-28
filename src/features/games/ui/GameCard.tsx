"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export interface GameCard {
	icon: React.ReactNode;
	title: string;
	description: string;
	href: string;
	commingSoonCard?: boolean;
}

export const GameCard = (props: GameCard) => {
	const [isFocussed, setIsFocussed] = useState(false);
	const [showTooltip, setShowTooltip] = useState(false);

	if (props.commingSoonCard) {
		const handleClick = () => {
			setShowTooltip(true);
			setTimeout(() => setShowTooltip(false), 1800);
		};

		return (
			<section
				onClick={handleClick}
				aria-disabled="true"
				className="relative py-6 px-10 sm:px-4 shadow dark:shadow-white/7 rounded flex flex-col gap-6 cursor-not-allowed select-none bg-black/2 dark:bg-white/3 saturate-50 opacity-70 dark:opacity-60">
				<div className="flex justify-between">
					<div className="flex justify-center items-center w-12 h-12 rounded bg-primary-100/60 dark:bg-primary-700/15 grayscale-[30%]">
						{props.icon}
					</div>
				</div>

				<header className="flex flex-col gap-1.5 flex-1">
					<h2 className="text-xl text-black/70 dark:text-white/60 tracking-tighter font-title">{props.title}</h2>
					<p className="text-sm text-black/60 dark:text-white/40 tracking-wide line-clamp-2">{props.description}</p>
				</header>

				<div className="bg-primary-100 dark:bg-primary-100/10 text-center py-2 rounded-xl h-9.5 flex items-center justify-center text-black/50 dark:text-white/40 text-sm">
					Coming Soon
				</div>

				{showTooltip && (
					<div className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-md bg-black text-white dark:bg-white dark:text-black text-xs whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-1 duration-150">
						Coming soon!
						<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black dark:border-t-white" />
					</div>
				)}
			</section>
		);
	}

	return (
		<section
			className={`py-6 px-10 sm:px-4 shadow dark:shadow-white/7 rounded flex flex-col gap-6 group transition-all duration-300 ease-in-out ${isFocussed ? "bg-primary-50 dark:bg-primary-100 -translate-y-0.5 hover:-translate-y-1 ring ring-primary-300 dark:ring-primary-500 ring-offset-3 dark:ring-offset-black" : "hover:bg-primary-50 dark:hover:bg-primary-100/18 hover:-translate-y-1"}`}>
			<div className="flex justify-between">
				<div
					className={`flex justify-center items-center w-12 h-12 rounded transition-all duration-500 ease-in-out ${isFocussed ? "bg-primary-300/50 dark:bg-primary-500/40 rotate-1.5 group-hover:rotate-2" : "bg-primary-100 dark:bg-primary-700/20 group-hover:bg-primary-300/50 dark:group-hover:bg-primary-500/40 group-hover:rotate-4"}`}>
					{props.icon}
				</div>
			</div>

			<header className="flex flex-col gap-1.5 flex-1">
				<h2 className="text-xl text-black dark:text-white/89 tracking-tighter font-title">{props.title}</h2>
				<p className="text-sm text-black/88 dark:text-white/55 tracking-wide line-clamp-2">{props.description}</p>
			</header>

			<Link
				href={props.href}
				onFocus={() => setIsFocussed(true)}
				onBlur={() => setIsFocussed(false)}
				className="flex justify-center items-center gap-1 hover:gap-1.5 focus:gap-1.5 bg-primary-300 dark:bg-primary-500/60 hover:bg-primary-500 dark:hover:bg-primary-300 text-center py-2 rounded-xl h-9.5 transition-all duration-200 ease-in-out focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-black peer outline-transparent text-black dark:text-black">
				Play <ArrowRight size={18} />
			</Link>
		</section>
	);
};
