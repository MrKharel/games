"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Trivia } from "./components";
import { useGameStore } from "./useGameStore";

export interface RawTrivia {
	correct_answer: string;
	incorrect_answers: Array<string>;
	question: string;
}
export interface Response {
	response_code: number;
	results: Array<RawTrivia>;
}
export interface ReadymadeTrivia {
	correctAnswer: string;
	options: Array<string>;
	question: string;
}
export interface AnsweredTrivia extends ReadymadeTrivia {
	userAnswer: string;
	isCorrect: boolean;
}

interface GameProps {
	trivias: Array<ReadymadeTrivia>;
	currentPath: string;
}

export const TriviaGame = (props: GameProps) => {
	const { setTrivias, resetGame, currentTrivia, answeredTrivias } = useGameStore();
	const router = useRouter();

	useEffect(() => {
		resetGame();
		setTrivias(props.trivias);
	}, []);

	useEffect(() => {
		if (props.trivias.length === answeredTrivias.length) {
			router.push(`${props.currentPath}/results`);
		}
	}, [currentTrivia]);

	return (
		<>
			{props.trivias.map((trivia, index) => {
				if (currentTrivia === index) {
					return <Trivia key={index} {...trivia} />;
				}
				return null;
			})}
		</>
	);
};
