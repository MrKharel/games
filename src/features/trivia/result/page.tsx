"use client";

import { useState } from "react";
import { useGameStore } from "../game";
import { Header } from "@/global-components";
import { useRouter } from "next/navigation";

export const TriviaResults = () => {
	const { answeredTrivias } = useGameStore();
	const router = useRouter();
	const [showAll, setShowAll] = useState(false);

	const correctCount = answeredTrivias.filter((a) => a.isCorrect).length;
	const total = answeredTrivias.length;

	return (
		<>
			<Header
				logoText=<>
					funlittle{""}
					<span className="text-primary-500 dark:text-primary">results</span>
				</>
			/>

			{/* Result hero */}
			<section className="self-center my-10 text-7xl flex items-center gap-2">
				<span className="font-semibold text-black/90 dark:text-white/90">{correctCount}</span>
				<div className="text-black dark:text-white text-9xl">/</div>
				<span className="font-semibold text-black/90 dark:text-white/90">{total}</span>
			</section>

			{/* Answer sheet */}
			<section className="w-screen lg:w-2xl mx-auto px-12 pb-12 flex flex-col gap-1">
				{answeredTrivias.map((trivia, index) => {
					if (showAll || index < 3) {
						return (
							<div
								key={index}
								className="flex items-start justify-between gap-4 border-b border-black/10 dark:border-white/8 p-4">
								<div className="flex flex-col gap-1">
									<h3 className="font-medium text-black/80 dark:text-white/75">{trivia.question}</h3>
									<p className="text-sm text-black/40 dark:text-white/40">Your answer: {trivia.userAnswer}</p>
								</div>

								{trivia.isCorrect ? (
									<span className="text-green-600 text-xl leading-none shrink-0">✓</span>
								) : (
									<span className="text-red-600 text-xl leading-none shrink-0">✕</span>
								)}
							</div>
						);
					}
					return null;
				})}
			</section>

			<button
				className="self-center text-black/60 dark:text-white/55 dark:font-[300] hover:underline underline-offset-3 transition-all duration-200 ease-in-out mb-10 cursor-pointer"
				onClick={() => setShowAll((prev) => !prev)}>
				{showAll ? ". . . less" : ". . . more"}
			</button>

			{/* Play again */}
			<div className="flex justify-center pb-16">
				<button
					onClick={() => router.push("/games")}
					className="rounded-md bg-black/90 hover:bg-black dark:bg-white/90 dark:hover:bg-white/70 text-white/90 dark:text-black/90 px-6 py-2.5 font-medium transition-colors ease-in-out duration-500 cursor-pointer">
					Play Again
				</button>
			</div>
		</>
	);
};
