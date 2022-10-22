import Link from "next/link";

const navigations = [
	{ name: "sobre", href: "/about" },
	{ name: "projetos", href: "/projects" },
	{ name: "contatos", href: "/contacts" },
];

export const Navigation = () => (
	<ul>
		{navigations.map((navigation, index) => (
			<li
				key={index}
				className="font-accent capitalize text-5xl font-normal mt-8 transition ease-in focus:italic focus:line-through hover:italic hover:line-through sm:text-7xl lg:text-9xl"
			>
				<Link href={navigation.href}>{navigation.name}</Link>
			</li>
		))}
	</ul>
);
