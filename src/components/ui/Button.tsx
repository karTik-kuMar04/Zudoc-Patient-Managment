import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'warning' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600',
  warning: 'bg-amber-500 text-white hover:bg-amber-600',
  danger: 'bg-rose-500 text-white hover:bg-rose-600',
}

export const Button = ({ variant = 'primary', className = '', ...props }: ButtonProps) => (
  <button
    {...props}
    className={`rounded-md px-4 py-2 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className}`}
  />
)
