import { ComingSoon } from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts/default-layout";

export default function Blog() {
	return (
		<DefaultLayout withoutFooter>
			<section className="center--row pt-21">
				<ComingSoon />
			</section>
		</DefaultLayout>
	);
}
