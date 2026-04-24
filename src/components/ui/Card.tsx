import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return <article className={`rounded-xl bg-white p-4 shadow-sm dark:bg-slate-800 ${className}`}>{children}</article>
}
