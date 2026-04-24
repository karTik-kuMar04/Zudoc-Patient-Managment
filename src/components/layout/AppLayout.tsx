import { type ReactNode, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Header } from './Header'
import { Sidebar } from './Sidebar'

const pageTitles: Record<string, string> = {
  '/dashboard': 'Patient Treatment Overview',
  '/patients': 'Patient Journey List',
}

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const title = useMemo(() => {
    if (location.pathname.startsWith('/patients/')) return 'Patient Journey Detail'
    return pageTitles[location.pathname] ?? 'Zudoc Dashboard'
  }, [location.pathname])

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      {open && (
        <button
          aria-label="close sidebar overlay"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-10 bg-slate-900/30 lg:hidden"
        />
      )}
      <aside className={`${open ? 'block' : 'hidden'} fixed inset-y-0 z-20 lg:static lg:block`}>
        <Sidebar onClose={() => setOpen(false)} />
      </aside>
      <div className="flex min-h-screen flex-1 flex-col">
        <Header title={title} onMenuToggle={() => setOpen((prev) => !prev)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
