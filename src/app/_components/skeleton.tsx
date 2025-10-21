import { cn } from '@/lib/cn'

export function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="skeleton"
			className={cn('animate-pulse rounded-4xl bg-zinc-50', className)}
			{...props}
		/>
	)
}
