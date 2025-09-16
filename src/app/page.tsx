import { ArrowUpRight } from 'lucide-react'

export default function Home() {
	return (
		<main className="flex w-screen justify-center p-8 font-sans">
			<div className="container max-w-4xl space-y-8">
				<header className="w-full pb-4">
					<ul className="flex items-center justify-end gap-8 text-zinc-500">
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 transition-colors hover:text-black focus:text-black"
							>
								Github
								<ArrowUpRight aria-hidden className="size-4" />
							</a>
						</li>
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 transition-colors hover:text-black focus:text-black"
							>
								Linkedin
								<ArrowUpRight aria-hidden className="size-4" />
							</a>
						</li>
						<li>
							<a
								href="mailto:gabriel.rslima10@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:text-black focus:text-black"
							>
								gabriel.rslima10@gmail.com
							</a>
						</li>
					</ul>
				</header>
				<article className="space-y-8 text-lg">
					<h1 className="sr-only">Gabriel Lima</h1>
					<p>
						Salve! Aqui quem fala é o Gabriel, um desenvolvedor front-end
						inovador e criativo. Atuo como Desenvolvedor Front-end Júnior na{' '}
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold underline transition-opacity hover:opacity-85 focus:opacity-85"
						>
							Jet Soluções Web
						</a>
						, onde contribuo para o desenvolvimento de sistemas em diversos
						nichos.
					</p>
					<p>
						Possui alguma ideia mirabolante?{' '}
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold underline transition-opacity hover:opacity-85 focus:opacity-85"
						>
							Vamos conversar!
						</a>
					</p>
				</article>
				<article className="space-y-4 text-lg">
					<h2 className="text-zinc-500">Projetos Significativos</h2>
					<ul className="grid grid-cols-2 gap-4">
						<li>
							<a
								href="#"
								className="flex items-start gap-4 rounded-4xl border border-zinc-300 bg-zinc-50 p-8 transition-opacity hover:opacity-85 focus:opacity-85"
							>
								<div className="space-y-4">
									<h1 className="text-zinc-500">DownCars</h1>
									<p className="text-xl font-medium">
										Site desenvolvido para a oficina mecânica DownCars, buscando
										facilitar a divulgação da oficina e seus serviços.
									</p>
									<ul className="flex items-center gap-2">
										<li className="rounded-4xl border border-zinc-300 px-3 py-1 text-sm font-medium text-zinc-500">
											NextJS
										</li>
										<li className="rounded-4xl border border-zinc-300 px-3 py-1 text-sm font-medium text-zinc-500">
											TailwindCSS
										</li>
									</ul>
								</div>
								<i
									aria-hidden
									className="flex items-center justify-center rounded-full border border-zinc-300 p-4"
								>
									<ArrowUpRight />
								</i>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-start gap-4 rounded-4xl border border-zinc-300 bg-zinc-50 p-8 transition-opacity hover:opacity-85 focus:opacity-85"
							>
								<div className="space-y-4">
									<h1 className="text-zinc-500">Portfólio Jordânia Lima</h1>
									<p className="text-xl font-medium">
										Site desenvolvido para a Jordânia Lima, buscando facilitar o
										compartilhamento e a divulgação dos serviços.
									</p>
									<ul className="flex items-center gap-2">
										<li className="rounded-4xl border border-zinc-300 px-3 py-1 text-sm font-medium text-zinc-500">
											NextJS
										</li>
										<li className="rounded-4xl border border-zinc-300 px-3 py-1 text-sm font-medium text-zinc-500">
											TailwindCSS
										</li>
									</ul>
								</div>
								<i
									aria-hidden
									className="flex items-center justify-center rounded-full border border-zinc-300 p-4"
								>
									<ArrowUpRight />
								</i>
							</a>
						</li>
					</ul>
				</article>
			</div>
		</main>
	)
}
