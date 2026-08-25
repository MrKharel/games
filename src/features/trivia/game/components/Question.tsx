interface Props {
	question: string;
}

export const Question = (props: Props) => {
	return <h1 className="font-geist text-2xl lg:text-3xl text-center tracking-tighter">{props.question}</h1>;
};
