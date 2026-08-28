import Link from "next/link";

interface LogoProps {
	title?: string;
}

export const Logo = (props: LogoProps) => {
	return (
		<Link
			href={"#"}
			className="group flex justify-center items-center gap-4 h-10 hover:bg-black/10 dark:hover:bg-white/10 py-2 px-4 rounded active:scale-98 cursor-pointer">
			<div className="bg-black dark:bg-white rounded-[6px] w-7 h-7 flex justify-center items-center group-hover:rotate-8 transition-all duration-300 ease-in-out">
				<div className="bg-white dark:bg-black w-3.5 group-hover:w-3 h-3.5 group-hover:h-3 rotate-45 rounded group-hover:rotate-60 transition-all duration-500"></div>
			</div>
			<p className="font-title text-black/90 dark:text-white/90 text-lg lg:text-xl tracking-tighter">
				{props.title ? props.title : "funlittlegames"}
			</p>
		</Link>
	);
};
