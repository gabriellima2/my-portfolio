import { cn } from '@/lib/cn'

export function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="skeleton"
			className={cn(
				'bg-skeleton-background animate-pulse rounded-4xl',
				className
			)}
			{...props}
		/>
	)
}
