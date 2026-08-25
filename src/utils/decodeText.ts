"use client";

export const decodeText = (str: string) => {
	if (typeof document === "undefined") return str;

	const textarea = document.createElement("textarea");
	textarea.innerHTML = str;
	return textarea.value;
};
