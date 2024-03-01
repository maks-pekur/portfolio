import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Pekur Maksym',
	description: 'Full-Stack developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden antialiased',
					fontSans.variable
				)}
			>
				{children}
			</body>
		</html>
	)
}
