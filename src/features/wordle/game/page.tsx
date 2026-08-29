import { Header } from "@/global-components";
import { Keyboard, WordInput } from "./components";

export interface Response {
	word: string;
}

interface WordleGameProps {
	word: string;
}

export const WordleGame = (props: WordleGameProps) => {
	return (
		<>
			<Header
				logoText={
					<>
						funlittle{""}
						<span className="text-primary">wordle</span>
					</>
				}
			/>

			<div className="pt-6 flex flex-col justify-between h-[calc(100vh-64px)]">
				<WordInput word={props.word} />
				<Keyboard />
			</div>
		</>
	);
};
