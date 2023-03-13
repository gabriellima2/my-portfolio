import { useRouter } from "next/router";
import Link from "next/link";

const navigations = [
	{ name: "sobre", href: "/about" },
	{ name: "projetos", href: "/projects" },
	{ name: "contatos", href: "/contacts" },
];

export const Navigation = () => {
	const { pathname } = useRouter();

	return (
		<ul>
			{navigations.map((navigation, index) => {
				const isCurrentRoute = pathname === navigation.href;

				return (
					<li key={index} className="mt-8">
						<Link href={navigation.href}>
							<a
								tabIndex={isCurrentRoute ? -1 : 0}
								aria-disabled={isCurrentRoute}
								aria-current={isCurrentRoute}
								onClick={(e) => isCurrentRoute && e.preventDefault()}
								className={`${
									isCurrentRoute &&
									"pointer-events-none line-through opacity-70"
								}
										font-accent capitalize text-5xl font-normal sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl focus:opacity-70 focus:line-through hover:opacity-70 hover:line-through disabled:pointer-events-none`}
							>
								{navigation.name}
							</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
