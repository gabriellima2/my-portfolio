type Params = {
	variants?: keyof typeof modifiers;
};

const modifiers = {
	square: "w-fit rounded-s p-3 center--row gap-3",
	default: "pl-6",
};

export function buttonDefaultStyles(params: Params) {
	const { variants = "default" } = params;
	const modifier = modifiers[variants];

	return {
		button: `group w-full max-w-[587px] flex items-center justify-between border-2 border-util-secondary rounded-full p-2 font-medium text-normal text-heading transition-colors hover:bg-util-primary focus:bg-util-primary dark:text-heading-dark dark:border-util-secondary-dark dark:hover:bg-util-primary-dark dark:focus:bg-util-primary-dark ${modifier}`,
		icon: "center--row rounded-full w-[36px] h-[36px] bg-util-primary border-2 border-util-secondary dark:border-util-secondary-dark dark:bg-util-primary-dark group-hover:border-transparent group-focus:border-transparent",
	};
}
