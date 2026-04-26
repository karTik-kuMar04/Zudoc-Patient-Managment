import { useContext } from 'react'
import { ThemeContext } from './ThemeContext' 
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = () => {
  const context = useContext(ThemeContext)
  
  if (!context) return null

  const { theme, toggleTheme } = context
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="group relative inline-flex h-10 w-20 items-center rounded-full bg-gray-200 px-2 transition-all duration-300 ease-in-out dark:bg-zinc-800 shadow-inner"
    >

      <span
        className={`absolute h-7 w-7 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out dark:bg-zinc-900 ${
          isDark ? 'translate-x-9' : 'translate-x-0'
        }`}
      />

      <div className="relative flex w-full items-center justify-between gap-4 px-0.5">
        <Sun 
          size={18} 
          className={`z-10 transition-colors duration-300 ${
            !isDark ? 'text-amber-500' : 'text-zinc-500'
          }`} 
        />
        <Moon 
          size={18} 
          className={`z-10 transition-colors duration-300 ${
            isDark ? 'text-indigo-400' : 'text-zinc-400'
          }`} 
        />
      </div>
    </button>
  )
}