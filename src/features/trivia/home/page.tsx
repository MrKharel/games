import Link from "next/link";

export const TriviaHome = () => {
	return (
		<div className="flex flex-col justify-center py-30">
			<h1 className="text-black/80 text-5xl font-semibold trakcing-tighter text-center">Select Trivias Category</h1>

			<div className="flex gap-10 py-10 flex justify-center">
				<Link
					href="/trivia/general-knowledge"
					className="text-blue-400 hover:text-cyan-500 hover:underline underline-offset-3 transition-all ease-in-out duration-500">
					G.K.
				</Link>
				<Link
					href="/trivia/art"
					className="text-blue-400 hover:text-cyan-500 hover:underline underline-offset-3 transition-all ease-in-out duration-500">
					Art
				</Link>
				<Link
					href="/trivia/history"
					className="text-blue-400 hover:text-cyan-500 hover:underline underline-offset-3 transition-all ease-in-out duration-500">
					History
				</Link>
			</div>
		</div>
	);
};
