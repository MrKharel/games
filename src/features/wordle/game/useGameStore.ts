import { create } from "zustand";

const WORD_LENGTH = 5;
const NUM_ROWS = 6;

export type LetterStatus = "correct" | "present" | "absent" | "empty";
type GameState = "playing" | "won" | "lost";

interface WordleStore {
	word: string;
	grid: Array<Array<string>>;
	statusGrid: LetterStatus[][];
	activeRow: number;
	activeCol: number;
	lockedRows: number[];
	gameState: GameState;
	shakeRow: number | null;

	init: (word: string) => void;
	setLetter: (row: number, col: number, value: string) => void;
	backspace: (row: number, col: number) => void;
	moveActiveCol: (col: number) => void;
	submitRow: (row: number) => void;
	clearShake: () => void;
	reset: (word?: string) => void;
}

const emptyGrid = () => Array.from({ length: NUM_ROWS }, () => Array(WORD_LENGTH).fill(""));
const emptyStatusGrid = () =>
	Array.from({ length: NUM_ROWS }, () => Array(WORD_LENGTH).fill("empty") as LetterStatus[]);

export const useGameStore = create<WordleStore>((set, get) => ({
	word: "",
	grid: emptyGrid(),
	statusGrid: emptyStatusGrid(),
	activeRow: 0,
	activeCol: 0,
	lockedRows: [],
	gameState: "playing",
	shakeRow: null,

	init: (word) => {
		// Only (re)initialize if the word actually changes, so remounts don't reset progress
		if (get().word === word.toUpperCase()) return;
		set({
			word: word.toUpperCase(),
			grid: emptyGrid(),
			statusGrid: emptyStatusGrid(),
			activeRow: 0,
			activeCol: 0,
			lockedRows: [],
			gameState: "playing",
			shakeRow: null,
		});
	},

	setLetter: (row, col, value) => {
		const { activeRow, lockedRows, gameState } = get();
		if (gameState !== "playing" || row !== activeRow || lockedRows.includes(row)) return;

		const letter = value
			.replace(/[^a-zA-Z]/g, "")
			.slice(-1)
			.toUpperCase();

		set((state) => {
			const grid = state.grid.map((r) => [...r]);
			grid[row]![col] = letter;
			return { grid, activeCol: letter && col < WORD_LENGTH - 1 ? col + 1 : state.activeCol };
		});
	},

	backspace: (row, col) => {
		const { activeRow, lockedRows, gameState, grid } = get();
		if (gameState !== "playing" || row !== activeRow || lockedRows.includes(row)) return;

		set((state) => {
			const newGrid = state.grid.map((r) => [...r]);
			if (grid[row]![col]) {
				newGrid[row]![col] = "";
				return { grid: newGrid };
			} else if (col > 0) {
				newGrid[row]![col - 1] = "";
				return { grid: newGrid, activeCol: col - 1 };
			}
			return {};
		});
	},

	moveActiveCol: (col) => set({ activeCol: col }),

	submitRow: (row) => {
		const { grid, word, gameState, lockedRows } = get();
		if (gameState !== "playing" || lockedRows.includes(row)) return;

		const guess = grid[row]!.join("");
		if (guess.length !== WORD_LENGTH) {
			set({ shakeRow: row });
			return;
		}

		const result = evaluateGuess(guess, word);

		set((state) => {
			const statusGrid = state.statusGrid.map((r) => [...r]);
			statusGrid[row] = result;

			const won = guess === word;
			const lost = !won && row === NUM_ROWS - 1;

			return {
				statusGrid,
				lockedRows: [...state.lockedRows, row],
				gameState: won ? "won" : lost ? "lost" : "playing",
				activeRow: won || lost ? state.activeRow : row + 1,
				activeCol: 0,
			};
		});
	},

	clearShake: () => set({ shakeRow: null }),

	reset: (word) =>
		set({
			word: (word ?? get().word).toUpperCase(),
			grid: emptyGrid(),
			statusGrid: emptyStatusGrid(),
			activeRow: 0,
			activeCol: 0,
			lockedRows: [],
			gameState: "playing",
			shakeRow: null,
		}),
}));

const evaluateGuess = (guess: string, word: string): LetterStatus[] => {
	const target = word.toUpperCase().split("");
	const letters = guess.toUpperCase().split("");
	const statuses: LetterStatus[] = Array(WORD_LENGTH).fill("absent");
	const remaining = [...target];

	letters.forEach((letter, i) => {
		if (letter === target[i]) {
			statuses[i] = "correct";
			remaining[i] = "_";
		}
	});

	letters.forEach((letter, i) => {
		if (statuses[i] === "correct") return;
		const idx = remaining.indexOf(letter);
		if (idx !== -1) {
			statuses[i] = "present";
			remaining[idx] = "_";
		}
	});

	return statuses;
};
