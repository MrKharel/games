"use client";

export interface SetupBtn {
	label: string;
	value: string;
	chosen: string;
	setChosen: React.Dispatch<React.SetStateAction<string>>;
}

export const SetupBtn = (props: SetupBtn) => {
	return (
		<button
			onClick={() => props.setChosen(props.value)}
			aria-pressed={props.chosen === props.value}
			className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ease-in-out border ${
				props.chosen === props.value
					? "bg-primary-300 dark:bg-primary-500 text-black border-primary-300 dark:border-primary-500 shadow-sm scale-105"
					: "bg-transparent text-black/60 dark:text-white/50 border-black/10 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-500 hover:text-black dark:hover:text-white/80 hover:bg-primary-50 dark:hover:bg-white/5"
			}`}>
			{props.label}
		</button>
	);
};
