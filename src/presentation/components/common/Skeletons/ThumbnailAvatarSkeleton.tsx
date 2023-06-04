type ThumbnailAvatarSkeletonProps = {
	className?: string;
};

export const ThumbnailAvatarSkeleton = (
	props: ThumbnailAvatarSkeletonProps
) => {
	const { className } = props;
	return (
		<span
			className={`h-16 w-16 ${className} block animate-pulse rounded-full bg-util-secondary dark:bg-util-secondary-dark`}
		/>
	);
};
