import { Menu, Moon, Sun } from 'lucide-react'

import { useTheme } from '../../hooks/useTheme'

interface HeaderProps {
  title: string
  onMenuToggle: () => void
}

export const Header = ({ title, onMenuToggle }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center gap-3">
        <button aria-label="toggle sidebar" onClick={onMenuToggle} className="rounded-md p-2 lg:hidden">
          <Menu className="h-5 w-5 text-slate-700 dark:text-slate-100" />
        </button>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
      </div>
      <button
        aria-label="toggle dark mode"
        onClick={toggleTheme}
        className="flex h-11 w-[116px] items-center justify-between gap-2 rounded-full border border-slate-300 bg-slate-100 px-2 py-1 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none dark:border-slate-600 dark:bg-slate-700"
      >
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
            theme === 'light'
              ? 'bg-white text-slate-800 shadow-sm dark:bg-slate-500'
              : 'text-slate-400'
          }`}
        >
          <Sun className="h-4 w-4" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          {theme}
        </span>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-slate-800 text-white shadow-sm dark:bg-slate-200 dark:text-slate-900'
              : 'text-slate-400'
          }`}
        >
          <Moon className="h-4 w-4" />
        </span>
      </button>
    </header>
  )
}
