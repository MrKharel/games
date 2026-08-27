import Link from "next/link";

interface LogoProps {
	title?: string;
}

export const Logo = (props: LogoProps) => {
	return (
		<Link href="#" className="flex gap-3 items-center group">
			{/* Logo icon */}
			<div className="bg-black/90 rounded-lg w-8 h-8 flex justify-center items-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-4 group-hover:bg-black">
				<div className="rotate-45 bg-white/90 dark:bg-black rounded-sm w-4 h-4 transition-all duration-300 group-hover:rotate-[60deg] group-hover:bg-white"></div>
			</div>

			{/* Logo text */}
			<h1 className="font-title text-xl tracking-tight text-black/90 transition-colors group-hover:text-black transition-colors">
				{props.title ? props.title : "funlittlegames"}
			</h1>
		</Link>
	);
};
