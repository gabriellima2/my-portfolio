import Link from "next/link";

const navigations = [
	{ name: "sobre", href: "/about" },
	{ name: "projetos", href: "/projects" },
	{ name: "contatos", href: "/contacts" },
];

export const Navigation = () => (
	<ul>
		{navigations.map((navigation, index) => (
			<li key={index} className="mt-8">
				<Link href={navigation.href}>
					<a className="font-accent capitalize text-5xl font-normal sm:text-7xl lg:text-9xl transition ease-in focus:italic focus:line-through hover:italic hover:line-through">
						{navigation.name}
					</a>
				</Link>
			</li>
		))}
	</ul>
);
