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
						Salve! Aqui quem fala é o Gabriel. Sou Desenvolvedor Front-end, e
						gosto de transformar ideias em interfaces rápidas, bem estruturadas
						e fáceis de evoluir.
					</p>
					<p>
						Já atuei na evolução de sistemas em produção e na criação de
						aplicações usadas no dia a dia de empresas e pessoas, lidando com
						código real, requisitos em mudança e decisões técnicas pensadas para
						o longo prazo.
					</p>
					<p>
						Em paralelo, desenvolvo projetos pessoais para testar ideias,
						explorar abordagens técnicas e colocar conceitos em prática.
					</p>
					<p>
						Atualmente faço parte do time da{' '}
						<AccentText>Jet Soluções Web</AccentText>.
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
