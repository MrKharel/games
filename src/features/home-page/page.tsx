import { Logo } from "@/components";
import { Footer, GameCard, type GameCardProps } from "./components";
import { ArrowRightIcon, CarFrontIcon, HashIcon, LightbulbIcon, WholeWordIcon } from "lucide-react";

const games: GameCardProps[] = [
	{
		title: "Trivia",
		description: "You can't get 10/10. I'm sure of it.",
		href: "/trivia",
		icon: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/lightbulb.svg",
	},
	{
		title: "Wordle",
		description: "Can you really guess the word? I don't think so.",
		href: "/wordle",
		icon: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/whole-word.svg",
	},
];

export const HomePage = () => {
	return (
		<main className="max-w-screen h-screen bg-white">
			<header className="h-16 flex justify-between items-center px-10">
				<Logo title="Games Resposotory" />
			</header>

			{/* Cards: Do not touch anything from here. I don't know how they are looking so fine in the webpage */}
			<div className="py-20 px-10 lg:px-20">
				<h2 className="text-lg traking-wide font-geist text-black/90">funlittlegames.</h2>
				<p className="text-sm tracking-wide font-geist text-black/70 mt-1 ml-2">
					Hurry up. Pick a game, and waste your time. You are welcome.
				</p>

				{/* The cards for real this time. */}
				<div className="grid grid-cols-[repeat(auto-fit,minmax(180,1fr))] gap-6 py-4">
					{games.map((game, index) => (
						<GameCard key={index} {...game} />
					))}

					{/* Coming soon */}
					<article className="group relative flex flex-col rounded-xl p-6 shadow-lg shadow-black/5 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 cursor-not-allowed transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
						{/* Glow effect on hover */}
						<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-200/20 to-primary-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

						{/* Icon container */}
						<div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
							<img
								src="https://www.svgrepo.com/show/347901/placeholder.svg"
								alt=""
								className="h-6 w-6 opacity-60"
								loading="lazy"
								decoding="async"
							/>
						</div>

						{/* Content */}
						<div className="relative flex flex-1 flex-col">
							<h3 className="font-title text-xl font-semibold tracking-tight text-gray-800">Coming Soon!</h3>
							<p className="mt-2 line-clamp-2 text-sm text-gray-500">Something awesome is brewing...</p>
						</div>

						{/* CTA Button */}
						<button
							className="relative mt-6 flex h-11 items-center justify-center gap-2 rounded-xl bg-gray-200 font-medium text-gray-400 cursor-not-allowed transition-all duration-200"
							disabled>
							Play
							<ArrowRightIcon className="h-4 w-4 opacity-50" aria-hidden="true" />
						</button>
					</article>
				</div>
			</div>

			<Footer />
		</main>
	);
};
