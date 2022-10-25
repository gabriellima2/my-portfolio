import Image, { ImageProps } from "next/image";

import { Layer } from "./Layer";

interface ResposiveImageProps extends Omit<ImageProps, "layout"> {
	layer?: boolean;
	containerStyle?: string;
}

export const ResponsiveImage = ({
	className,
	layer,
	...props
}: ResposiveImageProps) => (
	<div className={`${props.containerStyle} relative`}>
		<Image
			layout="fill"
			objectFit="contain"
			alt={props.alt}
			{...props}
			className={className}
		/>
		{layer && <Layer />}
	</div>
);
