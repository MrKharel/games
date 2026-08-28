import { create } from "zustand";
import type { AnsweredTrivia, ReadymadeTrivia } from "./page";
import { persist } from "zustand/middleware";

export interface GameStoreProps {
	trivias: Array<ReadymadeTrivia>;
	currentTrivia: number;
	answeredTrivias: Array<AnsweredTrivia>;

	setTrivias: (parameter: Array<ReadymadeTrivia>) => void;
	setCurrentTrivia: (parameter: number) => void;
	setAnsweredTrivias: (parameter: AnsweredTrivia) => void;
	resetGame: () => void;
}

export const useGameStore = create<GameStoreProps>()(
	persist(
		(set, get) => ({
			trivias: [],
			currentTrivia: 0,
			answeredTrivias: [],

			setTrivias: (parameter) => {
				set({ trivias: parameter });
			},
			setCurrentTrivia: (number) => {
				set({ currentTrivia: number });
			},
			setAnsweredTrivias: (parameter: AnsweredTrivia) => {
				const curr: Array<AnsweredTrivia> = get().answeredTrivias;
				const newTrivias: Array<AnsweredTrivia> = [...curr, parameter];

				set({ answeredTrivias: newTrivias });
			},
			resetGame: () => {
				set({ trivias: [], currentTrivia: 0, answeredTrivias: [] });
			},
		}),
		{ name: "trivia-game" },
	),
);
