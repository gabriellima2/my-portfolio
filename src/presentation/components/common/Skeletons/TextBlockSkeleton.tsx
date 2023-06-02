import { TextSkeleton, type TextSkeletonProps } from "./TextSkeleton";

type TextBlockSkeletonProps = Pick<TextSkeletonProps, "size"> & {
	lines: number;
	lastLineInTheMiddle?: boolean;
};

export const TextBlockSkeleton = (props: TextBlockSkeletonProps) => {
	const { lines, size, lastLineInTheMiddle = false } = props;
	const isLastLine = (line: number) => line === lines;

	return (
		<div className="mt-8 flex flex-col gap-3">
			{[...new Array(lines)].map((_, i) => (
				<TextSkeleton
					key={i}
					size={size}
					className={`${lastLineInTheMiddle && isLastLine(i + 1) && "w-1/2"}`}
				/>
			))}
		</div>
	);
};
