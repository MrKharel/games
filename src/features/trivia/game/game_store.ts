import { createJSONStorage, persist } from "zustand/middleware";
import { type ReadymadeTrivia } from "./page";
import { create } from "zustand";

interface AnsweredTrivia {
	index: number;
	question: string | undefined;
	options: Array<string> | undefined;
	correctOption: string | undefined;
	answer: string;
	isCorrect: boolean;
}

interface GameStoreProps {
	trivias: Array<ReadymadeTrivia>;
	currentTrivia: number;
	answeredTrivias: Array<AnsweredTrivia>;

	setTrivias: (trivias: Array<ReadymadeTrivia>) => void;
	setCurrentTrivia: (num: number) => void;
	setAnsweredTrivias: (props: AnsweredTrivia) => void;
	resetTrivias: () => void;
}

export const useGameStore = create<GameStoreProps>()(
	persist(
		(set, get) => ({
			trivias: [],
			currentTrivia: 0,
			answeredTrivias: [],

			setTrivias: (trivias) => {
				set({ trivias: trivias });
			},

			setCurrentTrivia: (num) => {
				set({ currentTrivia: num });
			},

			setAnsweredTrivias: (props: AnsweredTrivia) => {
				const { index, question, options, correctOption, answer, isCorrect } = props;

				const currAnsweredTrivias = get().answeredTrivias;
				const newAnsweredTrivias: Array<AnsweredTrivia> = [
					...currAnsweredTrivias,
					{ index, question, options, correctOption, answer, isCorrect },
				];

				set({ answeredTrivias: newAnsweredTrivias });
			},

			resetTrivias: () => {
				set({ trivias: [], currentTrivia: 0, answeredTrivias: [] });
			},
		}),
		{ name: "trivia-storage", storage: createJSONStorage(() => localStorage) },
	),
);
