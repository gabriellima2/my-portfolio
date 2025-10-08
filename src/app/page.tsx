import { Suspense } from 'react'
import { ArrowUpRight } from 'lucide-react'

import { Skeleton } from './_components/skeleton'

import { getProjects } from './_functions/projects'
import { env } from '@/lib/env'

export default function Home() {
	return (
		<main className="flex justify-center p-8 font-sans">
			<div className="container max-w-4xl space-y-8">
				<header className="w-full pb-4">
					<ul className="text-secondary-foreground flex items-center justify-end gap-8">
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
						Júnior na{' '}
						<strong className="font-semibold">Jet Soluções Web</strong>, onde
						participo do desenvolvimento e manutenção de sistemas em diversos
						nichos. Tenho autonomia para sugerir melhorias e novas
						funcionalidades.
					</p>
					<p>
						Participo de um projeto focado na evolução de um sistema legado que
						já passou por várias tecnologias ao longo do tempo. Como cada versão
						funciona de forma isolada, nosso trabalho envolve refazer e
						aprimorar telas importantes, além de desenvolver novas
						funcionalidades que automatizam e simplificam tarefas repetitivas ou
						complexas do dia a dia dos usuários. Utilizamos tecnologias modernas
						como NextJS, TypeScript, TailwindCSS e TanStack Query. Até agora,
						conseguimos melhorar significativamente a performance, desde o
						carregamento inicial até a fluidez nas interações com os elementos
						em tela, evitando travamentos no front-end e garantindo uma
						experiência mais leve e responsiva, mesmo lidando com grandes
						volumes de dados. Tudo isso mantendo um código limpo, bem
						estruturado e fácil de manter. Também definimos um boilerplate que
						padroniza o desenvolvimento e aumenta a produtividade na criação de
						novas telas e funcionalidades.
					</p>
					<p>
						Também atuo no desenvolvimento de um projeto com suporte bilíngue
						(inglês e espanhol), utilizando i18n para oferecer uma experiência
						fluida e adaptada aos usuários nos EUA.
					</p>
					<p>
						Tem uma ideia bacana?{' '}
						<a
							href={env.CONTACTS.EMAIL}
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold underline transition-opacity hover:opacity-85 focus:opacity-85"
						>
							Bora colocar no ar!
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
						className="border-border bg-card-background flex items-start gap-4 rounded-4xl border p-8 transition-opacity hover:opacity-85 focus:opacity-85"
					>
						<div className="space-y-4">
							<h1 className="text-secondary-foreground">{project.title}</h1>
							<p className="text-xl font-medium">{project.description}</p>
							<ul className="flex items-center gap-2">
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
						<i
							aria-hidden
							className="border-border flex items-center justify-center rounded-full border p-4"
						>
							<ArrowUpRight />
						</i>
					</a>
				</li>
			))}
		</ul>
	)
}
