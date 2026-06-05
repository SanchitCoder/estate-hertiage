import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost' | 'ghost-gold' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  icon?: ReactNode
  iconRight?: ReactNode
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-navy-deep font-500 hover:bg-gold-light active:bg-gold-dark shadow-gold hover:shadow-gold-lg hover:-translate-y-px active:translate-y-0',
  outline:
    'border border-white/25 text-off-white hover:border-white/50 hover:bg-white/8 active:bg-white/12',
  ghost:
    'text-mist hover:text-off-white hover:bg-white/8 active:bg-white/12',
  'ghost-gold':
    'border border-gold/30 text-gold hover:border-gold/60 hover:bg-gold/8 active:bg-gold/15',
  danger:
    'bg-red-600/90 text-white hover:bg-red-600 active:bg-red-700',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs gap-1.5 rounded-md',
  md: 'px-6 py-3 text-sm gap-2 rounded-lg',
  lg: 'px-8 py-4 text-base gap-2.5 rounded-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconRight,
      fullWidth = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300',
          'focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
        ) : (
          icon
        )}
        {children}
        {!loading && iconRight}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
