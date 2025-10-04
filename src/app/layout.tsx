import './globals.css'

import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Gabriel Lima',
	description:
		'Atuo como Desenvolvedor Front-end Júnior na Jet Soluções Web, onde participo do desenvolvimento e manutenção de sistemas em diversos nichos. Tenho autonomia para sugerir melhorias e novas funcionalidades.',
	keywords: [
		'Desenvolvedor',
		'Programador',
		'Front-end',
		'Programação',
		'Software',
		'Desenvolvimento',
		'ReactJS',
		'Typescript',
		'Javascript',
		'React Native',
	],
	applicationName: 'Gabriel Lima Portfólio',
	authors: [{ name: 'Gabriel Lima', url: process.env.GITHUB }],
	creator: 'Gabriel Lima',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${geistSans.variable} antialiased`}>{children}</body>
		</html>
	)
}
