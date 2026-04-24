import type { InputHTMLAttributes } from 'react'

export const Input = ({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 ${className}`}
  />
)
