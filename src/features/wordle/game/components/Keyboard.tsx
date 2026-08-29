"use client";

import { useMemo } from "react";
import { useGameStore, type LetterStatus } from "../useGameStore";

type Key = string;
type KeyRow = Array<Key>;

interface KeyProps {
	btn: string;
	wide?: boolean;
	status: LetterStatus;
	onClick: (key: string) => void;
	disabled: boolean;
}

const rows: Array<KeyRow> = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

const rankOf: Record<LetterStatus, number> = { correct: 3, present: 2, absent: 1, empty: 0 };

export const Keyboard = () => {
	const grid = useGameStore((s) => s.grid);
	const statusGrid = useGameStore((s) => s.statusGrid);
	const lockedRows = useGameStore((s) => s.lockedRows);
	const activeRow = useGameStore((s) => s.activeRow);
	const activeCol = useGameStore((s) => s.activeCol);
	const gameState = useGameStore((s) => s.gameState);
	const setLetter = useGameStore((s) => s.setLetter);
	const backspace = useGameStore((s) => s.backspace);
	const submitRow = useGameStore((s) => s.submitRow);

	const letterStatuses = useMemo(() => {
		const map: Record<string, LetterStatus> = {};
		lockedRows.forEach((rowIdx) => {
			grid[rowIdx]!.forEach((letter, colIdx) => {
				if (!letter) return;
				const status = statusGrid[rowIdx]![colIdx];
				if (!map[letter] || rankOf[status!] > rankOf[map[letter]]) {
					if (status !== undefined) {
						map[letter] = status;
					}
				}
			});
		});
		return map;
	}, [grid, statusGrid, lockedRows]);

	const disabled = gameState !== "playing";

	const handleKeyPress = (key: string) => {
		if (disabled) return;

		if (key === "ENTER") {
			submitRow(activeRow);
		} else if (key === "⌫") {
			backspace(activeRow, activeCol);
		} else {
			setLetter(activeRow, activeCol, key);
		}
	};

	return (
		<div className="w-screen flex flex-col gap-1.5 sm:gap-2 justify-center items-center self-end p-3 sm:p-6 rounded-2xl bg-neutral-200 dark:bg-neutral-900 transition-colors">
			{rows.map((row, index) => (
				<KeyRowComponent
					key={index}
					keys={row}
					letterStatuses={letterStatuses}
					disabled={disabled}
					onKeyPress={handleKeyPress}
				/>
			))}
		</div>
	);
};

const KeyRowComponent = ({
	keys,
	letterStatuses,
	disabled,
	onKeyPress,
}: {
	keys: KeyRow;
	letterStatuses: Record<string, LetterStatus>;
	disabled: boolean;
	onKeyPress: (key: string) => void;
}) => {
	return (
		<div className="flex gap-1 sm:gap-2 w-full justify-center px-1">
			{keys.map((key, index) => {
				const wide = key === "ENTER" || key === "⌫";
				return (
					<Key
						key={index}
						btn={key}
						wide={wide}
						status={letterStatuses[key] ?? "empty"}
						disabled={disabled}
						onClick={onKeyPress}
					/>
				);
			})}
		</div>
	);
};

const statusStyles: Record<LetterStatus, string> = {
	empty:
		"bg-white text-neutral-700 border-neutral-300 shadow-[0_2px_0_0_rgb(212,212,212)] dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700 dark:shadow-[0_2px_0_0_rgb(38,38,38)]",
	correct:
		"bg-green-500 text-white border-green-500 shadow-[0_2px_0_0_rgb(21,128,61)] dark:bg-green-600 dark:border-green-600 dark:shadow-[0_2px_0_0_rgb(20,83,45)]",
	present:
		"bg-yellow-500 text-white border-yellow-500 shadow-[0_2px_0_0_rgb(161,98,7)] dark:bg-yellow-600 dark:border-yellow-600 dark:shadow-[0_2px_0_0_rgb(113,63,18)]",
	absent:
		"bg-neutral-400 text-white border-neutral-400 shadow-[0_2px_0_0_rgb(115,115,115)] dark:bg-neutral-700 dark:border-neutral-700 dark:shadow-[0_2px_0_0_rgb(23,23,23)]",
};

const Key = ({ btn, wide, status, disabled, onClick }: KeyProps) => {
	return (
		<button
			type="button"
			disabled={disabled}
			onClick={() => onClick(btn)}
			className={`flex items-center justify-center shrink-0 ${
				wide ? "px-2 sm:px-3 min-w-[3.25rem] sm:min-w-16 lg:min-w-20" : "w-7 sm:w-10 lg:w-13"
			} h-10 sm:h-11 lg:h-13 rounded-lg font-mono text-[0.65rem] sm:text-sm font-medium select-none border active:translate-y-[2px] active:shadow-none transition-all duration-100 disabled:opacity-60 disabled:active:translate-y-0 ${statusStyles[status]}`}>
			{btn}
		</button>
	);
};
