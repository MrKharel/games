import { WordleGame } from "@/features/wordle/game";
import { words } from "@/utils/words";

export default async function Page() {
	const randomWord: string | undefined = words[Math.floor(Math.random() * words.length)];

	if (randomWord == undefined) {
		return <div className="">Please wait...</div>;
	}

	return <WordleGame word={randomWord} />;
}
