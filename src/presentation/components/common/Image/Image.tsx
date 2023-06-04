import NextImage from "next/image";
import React from "react";

type ImageProps = Pick<
	React.ImgHTMLAttributes<HTMLImageElement>,
	"src" | "alt" | "className"
>;

export const Image = (props: ImageProps) => {
	const { src, alt, className } = props;
	return (
		<NextImage
			src={src || "O atributo 'src' está vazio"}
			alt={alt || "Texto alternativo não fornecido"}
			className={`${className} h-auto w-full rounded-2xl`}
			width={500}
			height={500}
			sizes="100%"
			placeholder="blur"
			blurDataURL="/assets/cover.png"
			priority
		/>
	);
};
