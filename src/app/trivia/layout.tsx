import { Metadata } from "next";

export const metaata: Metadata = { title: "Fun Little Trivias" };

export default function trivias_layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
