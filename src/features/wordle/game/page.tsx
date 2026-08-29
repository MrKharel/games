"use client";

import { Header } from "@/global-components";
import { Keyboard, WordInput, ResultsPage } from "./components";
import { useGameStore } from "./useGameStore";

export interface Response {
	word: string;
}

interface WordleGameProps {
	word: string;
}

export const WordleGame = (props: WordleGameProps) => {
	const { gameState, word } = useGameStore();

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

			<div className="z-100">
				{useGameStore().gameState !== "playing" && <ResultsPage state={gameState} word={word} />}
			</div>
		</>
	);
};
