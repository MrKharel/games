"use client";

import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export const Theme = () => {
	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const shouldBeDark = stored ? stored === "dark" : prefersDark;

		setIsDark(shouldBeDark);
		document.documentElement.classList.toggle("dark", shouldBeDark);
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		const newIsDark = !isDark;
		setIsDark(newIsDark);
		document.documentElement.classList.toggle("dark", newIsDark);
		localStorage.setItem("theme", newIsDark ? "dark" : "light");
	};

	if (!mounted) return null;

	return (
		<button
			onClick={toggleTheme}
			type="button"
			className="text-black/90 dark:text-white/90 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 p-2 rounded">
			{isDark ? <Moon size={18} /> : <Sun size={18} />}
		</button>
	);
};
