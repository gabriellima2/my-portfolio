export type TextSkeletonProps = {
	size?: keyof typeof sizes;
	className?: string;
};

const sizes = {
	sm: "h-2",
	default: "h-4",
	md: "h-6",
	lg: "h-8",
	xl: "h-10",
	"2xl": "h-12",
};

export const TextSkeleton = (props: TextSkeletonProps) => {
	const { size = "default", className } = props;
	const height = sizes[size];
	return (
		<span
			className={`${height} ${className} block w-full animate-pulse rounded-md bg-util-secondary dark:bg-util-secondary-dark`}
		/>
	);
};
