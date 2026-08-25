"use client";

import { useEffect } from "react";
import { Options, Question, ResultPage } from "./components";
import { useGameStore } from "./game_store";

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

interface Props {
	trivias: Array<ReadymadeTrivia>;
}

export const GamePage = (props: Props) => {
	const { trivias } = props;
	const { setCurrentTrivia, answeredTrivias, setTrivias, resetTrivias } = useGameStore();

	useEffect(() => {
		resetTrivias();
		setTrivias(trivias);
		trivias && setCurrentTrivia(0);
	}, []);

	if (answeredTrivias.length === trivias.length) {
		return <ResultPage />;
	}

	return (
		<div className="">
			{trivias.map((trivia, index) => {
				if (answeredTrivias.length === index) {
					return (
						<div key={index} className="pt-20 flex flex-col items-center gap-15">
							<Question question={trivia.question} />
							<Options correctOption={trivia.correctAnswer} allOptions={trivia.options} />
						</div>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};
