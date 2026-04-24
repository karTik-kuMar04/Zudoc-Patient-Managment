import { Menu, Moon, Sun } from 'lucide-react'

import { useTheme } from '../../hooks/useTheme'
import { Button } from '../ui/Button'

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
      <Button
        variant="secondary"
        aria-label="toggle dark mode"
        onClick={toggleTheme}
        className="inline-flex items-center gap-2"
      >
        {theme === 'light' ? <Moon className="h-4 w-4" aria-hidden /> : <Sun className="h-4 w-4" aria-hidden />}
        <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
      </Button>
    </header>
  )
}
