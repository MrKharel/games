import Link from "next/link";
import { Header } from "./Header";

interface APIErrorProps {
	title: string;
	description: string | React.ReactNode;
	href: string;
}

export const APIError = (props: APIErrorProps) => {
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
						{props.title}
					</h2>

					<p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
						{props.description}
					</p>

					<Link
						href={props.href}
						className="mt-7 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
						Try again
					</Link>
				</div>
			</div>
		</>
	);
};
