import { TextSkeleton, ThumbnailAvatarSkeleton } from "./";

export const ProfileSkeleton = () => (
	<div className="flex flex-row gap-6">
		<ThumbnailAvatarSkeleton />
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<TextSkeleton size="md" />
				<TextSkeleton />
			</div>
			<div className="flex flex-row gap-6">
				<TextSkeleton className="w-12" />
				<TextSkeleton className="w-12" />
				<TextSkeleton className="w-12" />
				<TextSkeleton className="w-12" />
			</div>
		</div>
	</div>
);
