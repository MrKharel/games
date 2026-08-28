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
			<body className="bg-gray-50 dark:bg-[#1A1A1A] text-black/80 dark:text-white/75 font-body flex flex-col max-w-screen min-h-screen overflow-x-hidden">
				{children}
			</body>
		</html>
	);
}
