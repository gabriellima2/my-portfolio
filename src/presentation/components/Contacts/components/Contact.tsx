import { IContact } from "@/shared/interfaces/IContact";

export type ContactProps = IContact;

export const Contact = (props: ContactProps) => {
	const { title, href, mask } = props;
	return (
		<li>
			<a href={href} title={`Entrar em contato via ${title}`}>
				{title}
				{mask && (
					<>
						<span>:</span>
						<span>{mask}</span>
					</>
				)}
			</a>
		</li>
	);
};
