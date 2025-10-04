import { Suspense } from 'react'
import { ArrowUpRight } from 'lucide-react'

import { Skeleton } from './_components/skeleton'

export default function Home() {
	return (
		<main className="flex justify-center p-8 font-sans">
			<div className="container max-w-4xl space-y-8">
				<header className="w-full pb-4">
					<ul className="flex items-center justify-end gap-8 text-zinc-500">
						<li>
							<a
								href={process.env.GITHUB}
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
								href={process.env.LINKEDIN}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 transition-colors hover:text-black focus:text-black"
							>
								LinkedIn
								<ArrowUpRight aria-hidden className="size-4" />
							</a>
						</li>
						<li>
							<a
								href={`mailto:${process.env.EMAIL}`}
								className="transition-colors hover:text-black focus:text-black"
							>
								{process.env.EMAIL}
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
							href={process.env.EMAIL}
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold underline transition-opacity hover:opacity-85 focus:opacity-85"
						>
							Bora colocar no ar!
						</a>
					</p>
				</article>
				<article className="space-y-4 text-lg">
					<h2 className="text-zinc-500">Projetos Significativos</h2>
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
						className="flex items-start gap-4 rounded-4xl border border-zinc-300 bg-zinc-50 p-8 transition-opacity hover:opacity-85 focus:opacity-85"
					>
						<div className="space-y-4">
							<h1 className="text-zinc-500">{project.title}</h1>
							<p className="text-xl font-medium">{project.description}</p>
							<ul className="flex items-center gap-2">
								{project.techs.map((tech) => (
									<li
										key={tech}
										className="rounded-4xl border border-zinc-300 px-3 py-1 text-center text-sm font-medium text-zinc-500"
									>
										{tech}
									</li>
								))}
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
			))}
		</ul>
	)
}

interface Project {
	id: string
	title: string
	description: string
	techs: string[]
	href: string
}

interface GetAllProjectsResponse {
	data: {
		projects: Project[]
	}
}

async function getProjects(): Promise<Project[]> {
	const response = await fetch(process.env.API_URL as string, {
		method: 'POST',
		cache: 'force-cache',
		next: {
			revalidate: 3600, // 1 hour
		},
		headers: {
			Authorization: `Bearer ${process.env.API_KEY as string}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `
  			query Projects {
          projects {
            id
            title
            description
            techs
            href
          }
        }
      `,
		}),
	})

	const json = (await response.json()) as GetAllProjectsResponse
	return json.data.projects
}
