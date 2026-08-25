"use client";

import { useState } from "react";
import { useGameStore } from "../game_store";

interface Props {
	correctOption: string;
	allOptions: Array<string>;
}

interface ClickedOption {
	index: number;
	option: string;
}

export const Options = (props: Props) => {
	const { setAnsweredTrivias, currentTrivia, setCurrentTrivia, trivias } = useGameStore();
	const [clickedOption, setClickedOption] = useState<ClickedOption | null>(null);
	const [isProcessing, setIsProcessing] = useState(false);

	const handleClick = (index: number, option: string) => {
		// Prevent multiple clicks while processing
		if (clickedOption || isProcessing) return;

		setIsProcessing(true);
		setClickedOption({ index, option });

		// Add delay to show feedback before moving to next question
		setTimeout(() => {
			setAnsweredTrivias({
				index,
				question: trivias[currentTrivia]?.question,
				options: props.allOptions,
				correctOption: props.correctOption,
				answer: option,
				isCorrect: option === props.correctOption,
			});
			setIsProcessing(false);
		}, 1000);

		if (currentTrivia !== trivias.length) {
			setCurrentTrivia(currentTrivia + 1);
		}
	};

	const getButtonStyles = (option: string, index: number): string => {
		const isCorrectAnswer = option === props.correctOption;
		const isThisClicked = clickedOption?.index === index;
		const isAnswered = !!clickedOption;

		// Base styles
		const baseStyles =
			"px-4 py-3 border-2 rounded-xl shadow-sm transition-all duration-300 text-gray-800 font-medium text-sm sm:text-base relative overflow-hidden";

		// Default state (no answer selected yet)
		if (!isAnswered) {
			return `${baseStyles} bg-gradient-to-br from-yellow-100/80 to-yellow-50/80 hover:from-cyan-50 hover:to-blue-50 border-gray-300 hover:border-cyan-400 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]`;
		}

		// Answered state
		let styles = baseStyles;

		if (isThisClicked) {
			// Selected option
			styles += isCorrectAnswer
				? " bg-green-100 border-green-500 shadow-green-200 shadow-lg"
				: " bg-red-100 border-red-500 shadow-red-200 shadow-lg";
		} else if (isCorrectAnswer && isAnswered) {
			// Show correct answer even if user didn't select it
			styles += " bg-green-50 border-green-300";
		} else {
			// Other incorrect options
			styles += " bg-gray-100/70 border-gray-200 opacity-50";
		}

		return styles;
	};

	return (
		<div className="grid sm:grid-cols-2 w-full max-w-2xl gap-3 sm:gap-4 mx-auto">
			{props.allOptions.map((option, index) => {
				const isCorrectAnswer = option === props.correctOption;
				const isThisClicked = clickedOption?.index === index;
				const isAnswered = !!clickedOption;

				return (
					<button
						key={`${option}-${index}`}
						disabled={isAnswered || isProcessing}
						onClick={() => handleClick(index, option)}
						className={getButtonStyles(option, index)}>
						<span className="flex items-center justify-center gap-2">
							<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/5 text-xs font-bold">
								{String.fromCharCode(65 + index)}
							</span>
							{option}
							{isAnswered && isThisClicked && <span className="ml-1">{isCorrectAnswer ? "✓" : "✗"}</span>}
						</span>
					</button>
				);
			})}
		</div>
	);
};
