import {
	Article,
	ArticlePreview,
	Avatar,
	TextGroup,
	Typography,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts/default-layout";

export default function About() {
	return (
		<DefaultLayout>
			<Article className="flex flex-col justify-between gap-21 lg:items-center lg:flex-row">
				<Avatar
					src="/assets/photo.jpg"
					alt="Foto de Gabriel Lima"
					className="lg:order-1"
				/>
				<TextGroup
					title="Gabriel Lima"
					paragraphs={[
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					]}
				/>
			</Article>
			<ArticlePreview title="Contatos">
				<Typography.Paragraph>Aqui</Typography.Paragraph>
			</ArticlePreview>
		</DefaultLayout>
	);
}
