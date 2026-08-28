"use client";

import { useState } from "react";
import { useGameStore } from "../useGameStore";

interface OptionProps {
	option: string;
	correctAnswer: string;
	index: number;
}

export const Option = (props: OptionProps) => {
	const { trivias, currentTrivia, setCurrentTrivia, setAnsweredTrivias } = useGameStore();
	const [isCorrect, setIsCorrect] = useState<null | boolean>(null);

	const handleClick = () => {
		const correct = props.option === props.correctAnswer;
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
		}, 500);
	};

	return (
		<button
			onClick={handleClick}
			className={`w-full py-3 px-4 rounded-xl shadow transition-colors duration-200 cursor-pointer text-left font-medium dark:shadow-white/10 text-center ${isCorrect === true ? "bg-green-500/20 text-green-700 dark:text-green-400 ring-2 ring-green-500" : isCorrect === false ? "bg-red-500/20 text-red-700 dark:text-red-400 ring-2 ring-red-500" : "bg-white/20 dark:bg-neutral-800 hover:bg-white/30 dark:hover:bg-neutral-700"}`}>
			<span className="text-black/70 dark:text-white/70 uppercase">
				{props.index == 0 ? "A." : props.index == 1 ? "B." : props.index == 2 ? "C." : "D."}
			</span>{" "}
			{props.option}
		</button>
	);
};
