"use client";

import { useState } from "react";
import { useGameStore } from "../game_store";

export const ResultPage = () => {
	const { answeredTrivias } = useGameStore();
	const [showAllAnswers, setShowAllAnswers] = useState(false);

	const correctCount = answeredTrivias.filter((a) => a.isCorrect).length;
	const total = answeredTrivias.length;

	return (
		<div className="">
			{/* Hero */}
			<section className="flex flex-col items-center justify-center gap-2 py-16 px-4 text-center">
				<h1 className="text-xl text-gray-500 tracking-tight">Results</h1>
				<p className="text-5xl font-semibold text-black">
					{correctCount} / {total}
				</p>
			</section>

			{/* Answer sheet */}
			<section className="max-w-2xl mx-auto px-4 pb-12 flex flex-col gap-1">
				{answeredTrivias.map((trivia, index) => {
					if (showAllAnswers || index < 3) {
						return (
							<div key={index} className="flex items-start justify-between gap-4 border-b border-black/20 p-4">
								<div className="flex flex-col gap-1">
									<p className="font-medium text-gray-900">
										{index + 1}. {trivia.question}
									</p>
									<p className="text-sm text-gray-500">Your answer: {trivia.answer}</p>
								</div>

								{trivia.isCorrect ? (
									<span className="text-green-600 text-xl leading-none shrink-0">✓</span>
								) : (
									<span className="text-red-600 text-xl leading-none shrink-0">✕</span>
								)}
							</div>
						);
					} else {
						return null;
					}
				})}
			</section>

			{/* Hide or Show all the answers */}
			<div className="flex justify-center pb-10">
				<button
					onClick={() => setShowAllAnswers((prev) => !prev)}
					className="text-black/60 hover:text-black/90 cursor-pointer px-10 py-3 rounded-xl transition-all duration-500">
					{showAllAnswers ? ". . . less" : ". . . more"}
				</button>
			</div>

			{/* Play again */}
			<div className="flex justify-center pb-16">
				<button
					onClick={() => window.location.reload()}
					className="rounded-md bg-gray-900 px-6 py-2.5 text-white font-medium hover:bg-gray-800 transition-colors">
					Play Again
				</button>
			</div>
		</div>
	);
};
