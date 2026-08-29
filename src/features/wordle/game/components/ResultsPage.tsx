"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface ResultsPageProps {
	state: "won" | "lost" | "playing";
	word: string;
}

export const ResultsPage = (props: ResultsPageProps) => {
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		if (props.state === "won" || props.state === "lost") {
			const timer = setTimeout(() => {
				setShowPopup(true);
			}, 800);

			return () => clearTimeout(timer);
		}
		return undefined;
	}, [props.state]);

	return (
		<>
			{showPopup && (
				<div className="w-screen h-screen backdrop-blur-[4px] absolute top-0 left-0">
					<div className="w-full max-w-md mx-auto flex flex-col items-center gap-6 py-15 px-8 rounded-3xl bg-white/80 dark:bg-neutral-900/80 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-sm mt-[40vh] -translate-y-1/2">
						<h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
							{props.state === "won" ? "🎉 You won!" : "💀 You lost!"}
						</h2>

						<div className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-400">
							<span className="text-sm font-medium uppercase tracking-widest">
								{props.state == "lost" ? "The word was" : "With the word"}:
							</span>
							<p className="text-3xl font-black tracking-[0.2em] text-primary uppercase">{props.word}</p>
						</div>

						<div className="w-full flex flex-col gap-3">
							<Link
								href="/wordle"
								className="w-full rounded-xl bg-primary px-6 py-3 text-center font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
								Play Again
							</Link>
							<Link
								href="/games"
								className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-6 py-3 text-center font-semibold text-neutral-700 dark:text-neutral-200 transition-colors hover:bg-black/10 dark:hover:bg-white/10">
								Back Home
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
