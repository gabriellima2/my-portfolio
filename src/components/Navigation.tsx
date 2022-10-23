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
					<a className="font-accent capitalize text-5xl font-normal sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl transition ease-in focus:opacity-70 focus:line-through hover:opacity-70 hover:line-through">
						{navigation.name}
					</a>
				</Link>
			</li>
		))}
	</ul>
);
