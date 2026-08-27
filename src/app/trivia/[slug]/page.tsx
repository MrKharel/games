import { Logo } from "@/components";
import { GamePage, type RawTrivia, type ReadymadeTrivia, type Response } from "@/features/trivia/game/";
import { decode } from "html-entities";
import { notFound } from "next/navigation";

const CATEGORY_CODES = { "general-knowledge": 9, "art": 25, "history": 23 } as const;

type Slug = keyof typeof CATEGORY_CODES;

interface Props {
	params: Promise<{ slug: Slug }>;
}

function shuffle<T>(arr: T[]): T[] {
	return [...arr].sort(() => Math.random() - 0.5);
}

export default async function TriviaCategoryPage({ params }: Props) {
	const { slug } = await params;
	const categoryCode = CATEGORY_CODES[slug];

	if (!categoryCode) notFound();

	const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryCode}&type=multiple`);
	if (!res.ok) {
		console.error("Trivia fetch failed:", res.status);
		notFound();
	}

	const rawTrivia: Response = await res.json();
	const readymadeTrivias: Array<ReadymadeTrivia> = rawTrivia.results.map((raw: RawTrivia) => ({
		correctAnswer: decode(raw.correct_answer),
		options: shuffle([...raw.incorrect_answers.map((option) => decode(option)), decode(raw.correct_answer)]),
		question: decode(raw.question),
	}));

	return (
		<div className="flex flex-col gap-6">
			<header className="flex justify-center items-center h-16">
				<Logo />
			</header>
			<main>
				<GamePage trivias={readymadeTrivias} slug={slug} />
			</main>
		</div>
	);
}
