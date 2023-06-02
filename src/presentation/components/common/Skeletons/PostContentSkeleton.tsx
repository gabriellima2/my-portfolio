import { TextBlockSkeleton, TextSkeleton } from ".";

export const PostContentSkeleton = () => (
	<>
		<header className="flex flex-row items-start gap-8">
			<TextSkeleton className="w-36" />
			<TextSkeleton className="w-28" />
		</header>
		<section>
			<div>
				<TextSkeleton className="mb-3" size="2xl" />
				<TextSkeleton className="mb-21 w-1/2" size="2xl" />
			</div>
			<TextBlockSkeleton lines={7} lastLineInTheMiddle />
			<TextBlockSkeleton lines={4} />
		</section>
	</>
);
