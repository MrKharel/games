import { WordleGame } from "@/features/wordle/game";
import { APIError } from "@/global-components";

export default async function Page() {
	const res = await fetch("https://api.frontendexpert.io/api/fe/wordle-words");
	if (!res.ok) {
		return (
			<APIError
				title="Sorry bro (or sis)."
				description={
					<>
						RandomWordsDB didn&apos;t respond properly.
						<br />
						Would you like to try again?{" "}
					</>
				}
				href="/games"
			/>
		);
	}
	const data: Array<string> = await res.json();
	console.log(data);
	const randomWord: string | undefined = data[Math.floor(Math.random() * data.length)];

	if (randomWord == undefined) {
		return null;
	}

	return <WordleGame word={randomWord} />;
}
