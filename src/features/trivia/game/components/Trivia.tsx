import { Option, Question } from "../ui/";

interface Trivia {
	question: string;
	correctAnswer: string;
	options: Array<string>;
}

export const Trivia = (props: Trivia) => {
	return (
		<div className="w-screen">
			<Question str={props.question} />

			<div className="grid grid-cols-2 w-sm">
				{props.options.map((option, index) => {
					return <Option key={index} option={option} correctAnswer={props.correctAnswer} />;
				})}
			</div>
		</div>
	);
};
