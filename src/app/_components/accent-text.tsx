import React from 'react'
import { cn } from '@/lib/cn'

export function AccentText({
	className,
	...props
}: React.ComponentProps<'strong'>) {
	return <strong className={cn('font-semibold', className)} {...props} />
}
