"use client";

import { useEffect, useRef } from "react";
import { useGameStore, type LetterStatus } from "../useGameStore";

const WORD_LENGTH = 5;
const NUM_ROWS = 6;

export const WordInput = ({ word }: { word: string }) => {
	const init = useGameStore((s: any) => s.init);
	const grid = useGameStore((s: any) => s.grid);
	const statusGrid = useGameStore((s: any) => s.statusGrid);
	const activeRow = useGameStore((s: any) => s.activeRow);
	const activeCol = useGameStore((s: any) => s.activeCol);
	const lockedRows = useGameStore((s: any) => s.lockedRows);
	const gameState = useGameStore((s: any) => s.gameState);
	const shakeRow = useGameStore((s: any) => s.shakeRow);
	const clearShake = useGameStore((s: any) => s.clearShake);

	const inputRefs = useRef<(HTMLInputElement | null)[][]>(
		Array.from({ length: NUM_ROWS }, () => Array(WORD_LENGTH).fill(null)),
	);

	useEffect(() => {
		init(word);
	}, [word, init]);

	// Keep DOM focus in sync with store's activeRow/activeCol
	useEffect(() => {
		if (gameState === "playing") {
			inputRefs.current[activeRow]?.[activeCol]?.focus();
		}
	}, [activeRow, activeCol, gameState]);

	useEffect(() => {
		if (shakeRow !== null) {
			const t = setTimeout(clearShake, 400);
			return () => clearTimeout(t);
		}
		return undefined;
	}, [shakeRow, clearShake]);

	return (
		<div className="flex flex-col items-center gap-4 p-6">
			<div className="flex flex-col gap-2 justify-center items-center self-center p-6 rounded-2xl">
				{grid.map((row: Array<string>, rowIndex: number) => (
					<InputRow
						key={rowIndex}
						row={row}
						statuses={statusGrid[rowIndex]}
						rowIndex={rowIndex}
						isActive={rowIndex === activeRow && gameState === "playing"}
						isLocked={lockedRows.includes(rowIndex)}
						shake={shakeRow === rowIndex}
						registerRef={(col, el) => {
							inputRefs.current[rowIndex]![col] = el;
						}}
					/>
				))}
			</div>

			{gameState !== "playing" && (
				<div className="text-center font-mono">
					{gameState === "won" ? (
						<p className="text-green-600 dark:text-green-400 font-bold text-lg">
							Solved in {lockedRows.length} {lockedRows.length === 1 ? "try" : "tries"}!
						</p>
					) : (
						<p className="text-neutral-700 dark:text-neutral-300 font-bold text-lg">You lost.</p>
					)}
				</div>
			)}
		</div>
	);
};

const InputRow = ({
	row,
	statuses,
	rowIndex,
	isActive,
	isLocked,
	shake,
	registerRef,
}: {
	row: string[];
	statuses: LetterStatus[];
	rowIndex: number;
	isActive: boolean;
	isLocked: boolean;
	shake: boolean;
	registerRef: (col: number, el: HTMLInputElement | null) => void;
}) => {
	return (
		<div className={`flex gap-4 ${shake ? "animate-[shake_0.4s_ease-in-out]" : ""}`}>
			{row.map((letter, col) => (
				<Input
					key={col}
					row={rowIndex}
					col={col}
					value={letter}
					status={statuses[col]!}
					disabled={!isActive || isLocked}
					inputRef={(el) => registerRef(col, el)}
				/>
			))}
		</div>
	);
};

const statusStyles: Record<LetterStatus, string> = {
	empty: "bg-white text-neutral-800 border-black/18 dark:bg-neutral-800 dark:text-neutral-100 dark:border-white/18",
	correct: "bg-green-500 text-white border-green-500 dark:bg-green-600 dark:border-green-600",
	present: "bg-yellow-500 text-white border-yellow-500 dark:bg-yellow-600 dark:border-yellow-600",
	absent: "bg-neutral-400 text-white border-neutral-400 dark:bg-neutral-700 dark:border-neutral-700",
};

const Input = ({
	row,
	col,
	value,
	status,
	disabled,
	inputRef,
}: {
	row: number;
	col: number;
	value: string;
	status: LetterStatus;
	disabled: boolean;
	inputRef: (el: HTMLInputElement | null) => void;
}) => {
	const setLetter = useGameStore((s: any) => s.setLetter);
	const backspace = useGameStore((s: any) => s.backspace);
	const moveActiveCol = useGameStore((s: any) => s.moveActiveCol);
	const submitRow = useGameStore((s: any) => s.submitRow);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (disabled) return;

		if (e.key === "Backspace") {
			backspace(row, col);
		} else if (e.key === "ArrowLeft" && col > 0) {
			moveActiveCol(col - 1);
		} else if (e.key === "ArrowRight" && col < WORD_LENGTH - 1) {
			moveActiveCol(col + 1);
		} else if (e.key === "Enter") {
			submitRow(row);
		}
	};

	return (
		<input
			ref={inputRef}
			type="text"
			inputMode="text"
			maxLength={1}
			value={value}
			disabled={disabled}
			onChange={(e) => setLetter(row, col, e.target.value)}
			onKeyDown={handleKeyDown}
			className={`border w-13 h-13 rounded-xl text-center text-xl font-bold uppercase caret-transparent transition-colors disabled:opacity-90 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 ${statusStyles[status]}`}
		/>
	);
};
