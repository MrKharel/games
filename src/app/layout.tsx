import { Nunito, Josefin_Sans, Geist } from "next/font/google";
import { type Metadata } from "next";

import "./globals.css";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const josefin = Josefin_Sans({ variable: "--font-josefin", subsets: ["latin"] });
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = { title: "funlittlegames" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${nunito.variable} ${geist.variable} ${josefin.variable}`}>
			<body className="font-body text-black/80">{children}</body>
		</html>
	);
}
