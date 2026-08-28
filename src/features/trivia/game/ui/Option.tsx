"use client";

import { useState } from "react";
import { useGameStore } from "../useGameStore";

interface OptionProps {
	option: string;
	correctAnswer: string;
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
			className={`${isCorrect === true ? "bg-primary" : isCorrect === false ? "bg-red-400" : ""}`}>
			{props.option}
		</button>
	);
};
