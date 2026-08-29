import { WordleGame } from "@/features/wordle/game";
import { APIError } from "@/global-components";

export default async function Page() {
	const res = await fetch("https://random-word-api.herokuapp.com/word?length=5");
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

	return <WordleGame />;
}
