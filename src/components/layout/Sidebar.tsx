import { X, LayoutDashboard, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/patients', label: 'Patients', icon: Users },
]

interface SidebarProps {
  onClose: () => void
}

export const Sidebar = ({ onClose }: SidebarProps) => (
  <nav
    aria-label="primary navigation"
    className="h-full w-64 border-r border-slate-200 bg-white p-4 text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
  >
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Zudoc</h1>
      <button
        aria-label="close sidebar"
        onClick={onClose}
        className="rounded-md p-2 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none lg:hidden dark:hover:bg-slate-800"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>
    </div>
    <div className="space-y-2">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          aria-label={`navigate to ${label}`}
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
              isActive
                ? 'bg-indigo-600 text-white'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
            }`
          }
        >
          <Icon className="h-4 w-4" aria-hidden />
          <span>{label}</span>
        </NavLink>
      ))}
    </div>
  </nav>
)
