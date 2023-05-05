import { ComingSoon, Head } from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";

export default function Blog() {
	return (
		<>
			<Head path="Blog" keywords="Coming soon" />
			<DefaultLayout withoutFooter>
				<section className="center--row pt-21">
					<ComingSoon />
				</section>
			</DefaultLayout>
		</>
	);
}
