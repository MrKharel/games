import { SetupBtn, type SetupBtn as SetupBtnType } from "../global-ui";

interface CategoriesProps {
	title: string;
	buttons: Array<SetupBtnType>;
}

export const SetupSection = (props: CategoriesProps) => {
	return (
		<div className="flex flex-col gap-4 mt-10 py-6 dark:shadow-white/7 rounded">
			<h2 className="text-lg text-black/92 dark:text-white/88 font-title">{props.title}</h2>

			<div className="flex flex-wrap flex-1 justify-between sm:justify-start gap-1.5 md:gap-4">
				{props.buttons.map((button, index) => {
					return <SetupBtn key={index} {...button} />;
				})}
			</div>
		</div>
	);
};
