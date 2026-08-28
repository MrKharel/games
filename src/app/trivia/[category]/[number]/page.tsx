import { notFound } from "next/navigation";

type Category = "gk" | "art" | "history";

export default async function TriviaGamePage({ params }: { params: Promise<{ category: Category; number: number }> }) {
	const { category, number } = await params;
	let catId: number;

	if (number < 5 || number > 25) {
		notFound();
	}

	if (category === "gk") {
		catId = 9;
	} else if (category === "art") {
		catId = 9;
	} else if (category === "history") {
		catId = 9;
	} else {
		notFound();
	}

	const res = await fetch(`https://opentdb.com/api.php?amount=${number}&category=`);
}
