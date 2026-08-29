"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/global-components";
import { Categories, TriviaNumber } from "./components";
import { useGameStore } from "../game";

export const TriviaSetup = () => {
	const { resetGame } = useGameStore();
	const [category, setCategory] = useState("gk");
	const [range, setRange] = useState(12);

	useEffect(() => {
		resetGame();
	}, []);

	return (
		<>
			<Header />

			<div className="px-10 md:px-18">
				<Categories chosen={category} setChosen={setCategory} />
				<TriviaNumber range={range} setRange={setRange} />
			</div>

			<Link
				href={`/trivia/${category}/${range}`}
				className="bg-black dark:bg-white rounded-xl text-white/85 hover:text-white/94 dark:text-black/88 dark:hover:text-black/99 px-20 h-12 self-center md:self-start w-fit focus:ring-2 ring-offset-2 focus:ring-black dark:focus:ring-white transition ease-in-out duration-500 mt-20 md:mx-18 flex justify-center items-center">
				Start Game
			</Link>
		</>
	);
};
