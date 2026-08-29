import { TriviaGame, type RawTrivia, type ReadymadeTrivia, type Response } from "@/features/trivia/game";
import { Header } from "@/global-components";
import Link from "next/link";
import { notFound } from "next/navigation";

type Category = "gk" | "art" | "history";

const CATEGORY_IDS: Record<Category, number> = { gk: 9, art: 25, history: 23 };

function decodeHtmlEntities(text: string): string {
	return text
		.replace(/&quot;/g, `"`)
		.replace(/&#039;/g, `'`)
		.replace(/&amp;/g, "&")
		.replace(/&eacute;/g, "é")
		.replace(/&ldquo;/g, "“")
		.replace(/&rdquo;/g, "”");
}

function shuffle(arr: any[]): any {
	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

export default async function TriviaGamePage({ params }: { params: Promise<{ category: Category; number: string }> }) {
	const { category, number: rawNumber } = await params;
	const number = Number(rawNumber);

	if (!Number.isInteger(number) || number < 5 || number > 25) {
		notFound();
	}

	const catId = CATEGORY_IDS[category];
	if (!catId) {
		notFound();
	}

	const res = await fetch(`https://opentdb.com/api.php?amount=${number}&category=${catId}&type=multiple`);
	if (!res.ok) {
		return (
			<>
				<Header
					logoText=<>
						funlittle{""}
						<span className="text-primary">error</span>
					</>
				/>

				<div className="flex min-h-[60vh] items-center justify-center px-6">
					<div className="w-full max-w-lg text-center">
						<div className="mb-6 text-6xl">😵</div>

						<h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
							Sorry bro (or sis).
						</h2>

						<p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
							OpenTDB didn&apos;t respond properly.
							<br />
							Would you like to try again?
						</p>

						<Link
							href="/games"
							className="mt-7 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
							Try again
						</Link>
					</div>
				</div>
			</>
		);
	}

	const result: Response = await res.json();
	const trivias: Array<RawTrivia> = result.results;

	const readymadeTrivias: Array<ReadymadeTrivia> = trivias.map((trivia) => ({
		question: decodeHtmlEntities(trivia.question),
		correctAnswer: decodeHtmlEntities(trivia.correct_answer),
		options: shuffle([trivia.correct_answer, ...trivia.incorrect_answers].map(decodeHtmlEntities)),
	}));

	return <TriviaGame trivias={readymadeTrivias} currentPath={`trivia/${category}/${number}/`} />;
}
