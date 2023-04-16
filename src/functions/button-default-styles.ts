type Params = {
	variants?: keyof typeof modifiers;
	hasRightIcon?: boolean;
};

const modifiers = {
	square: "w-fit rounded-s p-3 gap-3",
	default: "",
};

export function buttonDefaultStyles(params: Params) {
	const { variants = "default", hasRightIcon } = params;
	const modifier = modifiers[variants];

	console.log(modifier);

	return {
		button: `group w-full max-w-[587px] flex items-center justify-between gap-2 border-2 border-util-secondary rounded-full p-2 font-medium text-normal text-heading transition-colors hover:bg-util-primary focus:bg-util-primary dark:text-heading-dark dark:border-util-secondary-dark dark:hover:bg-util-primary-dark dark:focus:bg-util-primary-dark ${
			hasRightIcon && "pl-6"
		} ${modifier}`,
		icon: "center--row rounded-full w-[36px] h-[36px] bg-util-primary border-2 border-util-secondary dark:border-util-secondary-dark dark:bg-util-primary-dark group-hover:border-transparent group-focus:border-transparent",
	};
}
