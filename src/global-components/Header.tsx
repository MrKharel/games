import { Logo, Theme } from "../global-ui";

interface HeaderProps {
	logoText?: string | React.ReactNode;
	includeTheme?: boolean;
	children?: React.ReactNode;
}

export const Header = (props: HeaderProps) => {
	const { includeTheme = true } = props;

	return (
		<header className="flex justify-between items-center w-screen max-w-screen h-16 px-4">
			<Logo title={props.logoText ? props.logoText : "funlittlegames"} />

			<div className="flex gap-2 items-center">
				{props.children}
				{includeTheme && <Theme />}
			</div>
		</header>
	);
};
