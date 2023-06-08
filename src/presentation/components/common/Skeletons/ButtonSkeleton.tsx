type ButtonSkeletonProps = {
	className?: string;
};

export const ButtonSkeleton = (props: ButtonSkeletonProps) => {
	const { className } = props;
	return (
		<span
			className={`h-8 w-8 ${className} block animate-pulse rounded-s bg-util-secondary dark:bg-util-secondary-dark`}
		/>
	);
};
