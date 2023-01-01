import Image, { ImageProps } from "next/image";

import { Layer } from "./Layer";

interface ResposiveImageProps extends Omit<ImageProps, "layout"> {
	layer?: boolean;
	containerStyle?: string;
}

export const ResponsiveImage = ({
	className,
	layer,
	containerStyle,
	...props
}: ResposiveImageProps) => (
	<div className={`${containerStyle} relative`}>
		<Image
			layout="fill"
			objectFit="contain"
			placeholder="blur"
			alt={props.alt}
			blurDataURL="/coverImage.jpg"
			{...props}
			className={className}
		/>
		{layer && <Layer />}
	</div>
);
