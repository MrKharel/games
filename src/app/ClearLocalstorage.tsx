"use client";

import { useEffect } from "react";

export const ClearLocalstorage = () => {
	useEffect(() => {
		window.localStorage.setItem("trivia-storage", "[]");
	}, []);

	return null;
};
