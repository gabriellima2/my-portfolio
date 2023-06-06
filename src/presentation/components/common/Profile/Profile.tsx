import { Typography } from "../Typography";
import { Avatar } from "../Avatar";

export type ProfileProps = {
	name: string;
	description: string;
	avatarSrc: string;
	additional?: () => JSX.Element;
};

export const Profile = (props: ProfileProps) => {
	const { name, description, avatarSrc, additional } = props;
	return (
		<section className="flex w-fit  flex-row flex-wrap gap-6">
			<Avatar src={avatarSrc} alt={`Foto de ${name}`} variants="thumbnail" />
			<section className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<Typography.Title className="!text-medium">{name}</Typography.Title>
					<Typography.Paragraph>{description}</Typography.Paragraph>
				</div>
				{!!additional && additional()}
			</section>
		</section>
	);
};
