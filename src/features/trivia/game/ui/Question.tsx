export const Question = ({ str }: { str: string }) => {
	return (
		<h1 className="text-2xl lg:text-3xl text-center font-title mt-20 my-4 mx-6 text-black/90 dark:text-white/90">
			{str}
		</h1>
	);
};
