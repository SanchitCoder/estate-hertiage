import { cn } from '@/lib/utils'

type BadgeVariant = 'gold' | 'accent' | 'navy' | 'green' | 'red' | 'muted'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md'
}

const variantClasses: Record<BadgeVariant, string> = {
  gold: 'bg-gold/15 text-gold-light border border-gold/25',
  accent: 'bg-accent/15 text-accent-light border border-accent/25',
  navy: 'bg-navy-light/30 text-mist border border-white/10',
  green: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
  red: 'bg-red-500/15 text-red-400 border border-red-500/25',
  muted: 'bg-white/8 text-mist border border-white/10',
}

export default function Badge({ variant = 'navy', children, className, size = 'md' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-sans font-500 tracking-wide rounded-full',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
