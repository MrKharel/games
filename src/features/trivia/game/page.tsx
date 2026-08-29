"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Trivia } from "./components";
import { useGameStore } from "./useGameStore";
import { Header } from "@/global-components";

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
	const { trivias, answeredTrivias, initializeGame, currentTrivia } = useGameStore();
	const router = useRouter();

	useEffect(() => {
		initializeGame(props.trivias);
	}, [props.trivias, initializeGame]);

	useEffect(() => {
		if (trivias.length > 0 && answeredTrivias.length > 0 && answeredTrivias.length === trivias.length) {
			router.push(`/${props.currentPath}/results`);
		}
	}, [trivias.length, answeredTrivias.length, props.currentPath, router]);

	return (
		<>
			<Header
				logoText=<>
					funlittle{""}
					<span className="text-primary">trivias</span>
				</>
			/>

			{props.trivias.map((trivia, index) => {
				if (currentTrivia === index) {
					return <Trivia key={index} {...trivia} />;
				}
				return null;
			})}
		</>
	);
};
