import { IContact } from "@/shared/interfaces/IContact";

export type ContactProps = IContact & {
	variants?: "default" | "with-mask";
};

export const Contact = (props: ContactProps) => {
	const { title, href, mask, variants = "default" } = props;
	const isToRenderTheMask = variants === "with-mask" && mask;
	return (
		<li>
			<a href={href} title={`Entrar em contato via ${title}`}>
				{title}
				{isToRenderTheMask && (
					<>
						<span>:</span>
						<span>{mask}</span>
					</>
				)}
			</a>
		</li>
	);
};
