import type { Metadata } from "next";

export const metadata: Metadata = { title: "Fun Little Trivias" };

export default function TriviaLayour({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
