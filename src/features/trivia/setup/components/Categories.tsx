import { SetupBtn, type SetupBtn as SetupBtnType } from "../ui";

interface CategoriesProps {
	chosen: string;
	setChosen: React.Dispatch<React.SetStateAction<string>>;
}

export const Categories = (props: CategoriesProps) => {
	const { chosen, setChosen } = props;

	const buttons: Array<SetupBtnType> = [
		{ label: "General Knowledge", value: "gk", chosen: chosen, setChosen: () => setChosen("gk") },
		{ label: "Arts and Craft", value: "art", chosen: chosen, setChosen: () => setChosen("art") },
		{ label: "World History", value: "history", chosen: chosen, setChosen: () => setChosen("history") },
	];

	return (
		<div className="flex flex-col gap-4 mt-10 py-6 dark:shadow-white/7 rounded">
			<h2 className="text-lg text-black/92 dark:text-white/88 font-title">Choose an category</h2>

			<div className="flex flex-wrap flex-1 justify-between sm:justify-start gap-1.5 md:gap-4">
				{buttons.map((button, index) => {
					return <SetupBtn key={index} {...button} />;
				})}
			</div>
		</div>
	);
};
