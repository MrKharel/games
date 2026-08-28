import { GameCard, type GameCard as GameCardType } from "../ui/GameCard";

const gameCards: Array<GameCardType> = [
	{
		title: "Trivia",
		icon: "",
		description: "You can't answer all the questions. I dare you to try, but don't even bother.",
		href: "/trivia",
	},
	{
		title: "Tic Tac Toe",
		icon: "",
		description: "Classic 3x3 strategy game, but with a twist if you want. Try it once. You'll love it.",
		href: "/trivia",
		commingSoonCard: true,
	},
	{
		title: "Wordle",
		icon: "",
		description: "Guess a five char long word. Test your knowledge of words and brag to your friends.",
		href: "/trivia",
		commingSoonCard: true,
	},
];

export const MapCards = () => {
	return (
		<div className="px-8 lg:p-25 py-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
			{gameCards.map((gameCard, index) => {
				return <GameCard key={index} {...gameCard} />;
			})}
		</div>
	);
};
