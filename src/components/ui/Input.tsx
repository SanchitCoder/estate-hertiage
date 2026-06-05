import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, icon, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-500 text-mist mb-1.5 font-sans tracking-wide uppercase">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-mist/60 pointer-events-none">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full bg-navy-mid/50 border rounded-lg px-4 py-3 font-sans text-sm text-off-white',
              'placeholder:text-mist/50 transition-all duration-200 outline-none',
              'focus:border-gold/50 focus:ring-1 focus:ring-gold/20',
              error ? 'border-red-500/60 focus:border-red-500/80 focus:ring-red-500/20' : 'border-white/12',
              icon && 'pl-10',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-1.5 text-xs text-red-400 font-sans">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-xs text-mist/70 font-sans">{hint}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-xs font-500 text-mist mb-1.5 font-sans tracking-wide uppercase">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full bg-navy-mid/50 border rounded-lg px-4 py-3 font-sans text-sm text-off-white',
            'placeholder:text-mist/50 transition-all duration-200 outline-none resize-none',
            'focus:border-gold/50 focus:ring-1 focus:ring-gold/20',
            error ? 'border-red-500/60' : 'border-white/12',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-400 font-sans">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-xs text-mist/70 font-sans">{hint}</p>}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block text-xs font-500 text-mist mb-1.5 font-sans tracking-wide uppercase">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            'w-full bg-navy-mid/50 border rounded-lg px-4 py-3 font-sans text-sm text-off-white',
            'transition-all duration-200 outline-none appearance-none cursor-pointer',
            'focus:border-gold/50 focus:ring-1 focus:ring-gold/20',
            error ? 'border-red-500/60' : 'border-white/12',
            className
          )}
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238fa8b8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-navy-deep">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1.5 text-xs text-red-400 font-sans">{error}</p>}
      </div>
    )
  }
)
Select.displayName = 'Select'

export default Input
