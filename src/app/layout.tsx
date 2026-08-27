import { Nunito, Josefin_Sans, Geist } from "next/font/google";
import { Metadata } from "next";
import "./tailwind.css";

const nunito = Nunito({ variable: "--font-body", subsets: ["latin"] });
const josefin = Josefin_Sans({ variable: "--font-title", subsets: ["latin"] });
const geist = Geist({ variable: "--font-option", subsets: ["latin"] });

export const metadata: Metadata = { title: "funlittlegames" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${nunito.variable} ${geist.variable} ${josefin.variable}`}>
			<body className="font-body">{children}</body>
		</html>
	);
}
