"use client";

import { useState } from "react";
import { Option, Question } from "../ui/";

interface Trivia {
	question: string;
	correctAnswer: string;
	options: Array<string>;
}

export const Trivia = (props: Trivia) => {
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

	return (
		<>
			<Question str={props.question} />

			<div className="grid grid-cols-1 md:grid-cols-2 w-screen max-w-4xl py-6 self-center gap-8 px-6 md:px-20">
				{props.options.map((option, index) => {
					return (
						<Option
							key={index}
							option={option}
							correctAnswer={props.correctAnswer}
							index={index}
							selectedAnswer={selectedAnswer}
							setSelectedAnswer={setSelectedAnswer}
						/>
					);
				})}
			</div>
		</>
	);
};
