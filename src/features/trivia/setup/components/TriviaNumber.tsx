interface TriviaNumberProps {
	range: number;
	setRange: React.Dispatch<React.SetStateAction<number>>;
}

export const TriviaNumber = (props: TriviaNumberProps) => {
	return (
		<div className="flex flex-col gap-4 mt-10 ml-4 px-8 py-6 dark:shadow-white/7 rounded w-full lg:w-fit lg:max-w-2xl bg-primary-100/10 dark:bg-white/3">
			<div className="flex items-baseline justify-between">
				<h2 className="text-lg text-black/92 dark:text-white/88 font-title">Number of questions</h2>
				<span className="text-2xl font-title text-primary-500 dark:text-primary-300 tabular-nums">{props.range}</span>
			</div>

			<div className="flex flex-col gap-2 min-w-64">
				<input
					type="range"
					min={5}
					max={25}
					step={1}
					value={props.range}
					onChange={(e) => props.setRange(Number(e.target.value))}
					className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-primary-100 dark:bg-white/10 accent-primary-500 dark:accent-primary-300"
				/>
				<div className="flex justify-between text-xs text-black/40 dark:text-white/35">
					<span>5</span>
					<span>25</span>
				</div>
			</div>
		</div>
	);
};
