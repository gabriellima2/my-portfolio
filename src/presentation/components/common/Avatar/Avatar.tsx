import Image, { ImageProps } from "next/image";

type AvatarProps = Pick<
	ImageProps,
	"src" | "alt" | "blurDataURL" | "placeholder" | "className"
> & {
	variants?: keyof typeof modifiers;
};

const modifiers = {
	thumbnail: "w-16 h-16 rounded-full",
	default: "w-full max-w-[400px] h-full rounded-2xl",
};

export const Avatar = (props: AvatarProps) => {
	const { variants = "default", className, ...rest } = props;
	const modifier = modifiers[variants];
	return (
		<Image
			{...rest}
			width={100}
			height={100}
			sizes="100%"
			priority
			className={`${className} ${modifier}`}
		/>
	);
};
