"use client";

import { useState } from "react";
import { useGameStore } from "../useGameStore";

interface OptionProps {
	option: string;
	correctAnswer: string;
	index: number;
	selectedAnswer: string;
	setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
}

export const Option = (props: OptionProps) => {
	const { trivias, currentTrivia, setCurrentTrivia, setAnsweredTrivias } = useGameStore();
	const [isCorrect, setIsCorrect] = useState<null | boolean>(null);

	const handleClick = () => {
		const correct = props.option === props.correctAnswer;
		props.setSelectedAnswer(props.option);
		setIsCorrect(correct);

		setTimeout(() => {
			setAnsweredTrivias({
				correctAnswer: props.correctAnswer,
				options: trivias[currentTrivia]?.options || [""],
				question: trivias[currentTrivia]?.question || "",
				userAnswer: props.option,
				isCorrect: correct,
			});
			setCurrentTrivia(currentTrivia + 1);
		}, 1200);
	};

	return (
		<button
			onClick={handleClick}
			disabled={props.selectedAnswer !== null}
			className={`w-full py-3 px-4 rounded-xl shadow transition-colors duration-200 text-left font-medium dark:shadow-white/10 ${
				props.selectedAnswer === null
					? "bg-white/20 dark:bg-neutral-800 hover:bg-white/30 dark:hover:bg-neutral-700 cursor-pointer"
					: props.option === props.correctAnswer
						? "bg-green-500/20 text-green-700 dark:text-green-400 ring-2 ring-green-500"
						: props.option === props.selectedAnswer
							? "bg-red-500/20 text-red-700 dark:text-red-400 ring-2 ring-red-500"
							: "bg-white/20 dark:bg-neutral-800 opacity-50"
			}`}>
			{props.option}
		</button>
	);
};
