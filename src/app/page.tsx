import { Suspense } from 'react'
import { ArrowUpRight } from 'lucide-react'

import { AccentText } from './_components/accent-text'
import { Skeleton } from './_components/skeleton'

import { getProjects } from './_functions/projects'
import { env } from '@/lib/env'

export default function Home() {
	return (
		<main className="flex justify-center p-6 font-sans sm:p-8">
			<div className="container max-w-4xl space-y-8">
				<header className="w-full pb-4">
					<ul className="text-secondary-foreground flex flex-wrap items-center justify-end gap-6 gap-y-8 sm:gap-8">
						<li>
							<a
								href={env.CONTACTS.GITHUB}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-accent focus:text-accent flex items-center gap-2 transition-colors"
							>
								Github
								<i aria-hidden>
									<ArrowUpRight className="size-4" />
								</i>
							</a>
						</li>
						<li>
							<a
								href={env.CONTACTS.LINKEDIN}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-accent focus:text-accent flex items-center gap-2 transition-colors"
							>
								LinkedIn
								<i aria-hidden>
									<ArrowUpRight className="size-4" />
								</i>
							</a>
						</li>
						<li>
							<a
								href={`mailto:${env.CONTACTS.EMAIL}`}
								className="hover:text-accent focus:text-accent transition-colors"
							>
								{env.CONTACTS.EMAIL}
							</a>
						</li>
					</ul>
				</header>
				<article className="space-y-8 text-lg">
					<h1 className="sr-only">Gabriel Lima</h1>
					<p>
						Salve! Aqui quem fala é o Gabriel. Atuo como Desenvolvedor Front-end
						Júnior na <AccentText>Jet Soluções Web</AccentText>, onde participo
						do desenvolvimento e manutenção de sistemas em diversos nichos.
						Tenho autonomia para sugerir melhorias e novas funcionalidades.
					</p>
					<p>
						Atuo na modernização de um sistema legado que já passou por várias
						tecnologias ao longo do tempo. Como cada versão funciona de forma
						isolada, nosso trabalho envolve refazer e aprimorar telas
						importantes, além de criar novas funcionalidades que automatizam
						tarefas repetitivas e complexas do dia a dia dos usuários. Nessa
						nova versão, utilizamos tecnologias modernas como{' '}
						<AccentText>NextJS</AccentText>, <AccentText>TypeScript</AccentText>
						, <AccentText>TailwindCSS</AccentText> e{' '}
						<AccentText>TanStack Query</AccentText>. Conseguimos melhorar
						significativamente a performance, desde o carregamento inicial até a
						fluidez nas interações, evitando travamentos no front-end e
						garantindo uma experiência mais leve e responsiva, mesmo lidando com
						grandes volumes de dados. Também padronizamos o desenvolvimento com
						um boilerplate, acelerando entregas e facilitando a manutenção.
					</p>
					<p>
						Também atuo no desenvolvimento de um projeto com suporte bilíngue
						(inglês e espanhol), utilizando <AccentText>i18n</AccentText> para
						oferecer uma experiência fluida e adaptada aos usuários nos EUA.
					</p>
					<p>
						Tem uma ideia bacana?{' '}
						<a
							href={env.CONTACTS.EMAIL}
							target="_blank"
							rel="noopener noreferrer"
							className="underline transition-opacity hover:opacity-85 focus:opacity-85"
						>
							<AccentText>Bora colocar no ar!</AccentText>
						</a>
					</p>
				</article>
				<article className="space-y-4 text-lg">
					<h2 className="text-secondary-foreground">Projetos Significativos</h2>
					<Suspense fallback={<ProjectsSkeleton />}>
						<Projects />
					</Suspense>
				</article>
			</div>
		</main>
	)
}

function ProjectsSkeleton() {
	return (
		<div className="space-y-4">
			{[...new Array(4)].map((_, i) => (
				<Skeleton key={i} className="h-[240px] w-full" />
			))}
		</div>
	)
}

async function Projects() {
	const projects = await getProjects()
	return (
		<ul className="space-y-4">
			{projects.map((project) => (
				<li key={project.id}>
					<a
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						className="border-border bg-card-background flex rounded-4xl border px-6 py-6 transition-opacity hover:opacity-85 focus:opacity-85 sm:px-8"
					>
						<div className="space-y-1">
							<div className="flex items-center justify-between">
								<h1 className="text-secondary-foreground">{project.title}</h1>
								<i
									aria-hidden
									className="border-border flex items-center justify-center rounded-full border p-3 sm:p-4"
								>
									<ArrowUpRight className="size-5 sm:size-6" />
								</i>
							</div>
							<div className="space-y-6">
								<p className="text-lg font-medium sm:text-xl">
									{project.description}
								</p>
								<ul className="flex flex-wrap items-center gap-x-2 gap-y-3">
									{project.techs.map((tech) => (
										<li
											key={tech}
											className="border-border text-secondary-foreground rounded-4xl border px-3 py-1 text-center text-sm font-medium"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>
						</div>
					</a>
				</li>
			))}
		</ul>
	)
}
