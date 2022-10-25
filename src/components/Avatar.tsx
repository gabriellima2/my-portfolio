import { ImageProps } from "next/image";

import { ResponsiveImage } from "./ResponsiveImage";

interface AvatarProps extends ImageProps {
	text?: string;
}

export const Avatar = ({ text, className, ...props }: AvatarProps) => {
	return (
		<div className="flex flex-col items-center gap-6 relative">
			<ResponsiveImage
				containerStyle={className}
				{...props}
				layer={true}
				className="rounded-full"
			/>
			{text && <small className="text-sm font-medium">{text}</small>}
		</div>
	);
};
