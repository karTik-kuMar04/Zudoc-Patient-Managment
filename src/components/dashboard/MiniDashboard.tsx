import type { LucideIcon } from 'lucide-react'

import { Card } from '../ui/Card'

interface MiniDashboardProps {
  icon: LucideIcon
  label: string
  value: string
  tone: 'primary' | 'success' | 'warning' | 'danger'
}

const toneClass: Record<MiniDashboardProps['tone'], string> = {
  primary: 'border-indigo-600',
  success: 'border-emerald-500',
  warning: 'border-amber-500',
  danger: 'border-rose-500',
}

export const MiniDashboard = ({ icon: Icon, label, value, tone }: MiniDashboardProps) => (
  <Card className={`border-l-4 ${toneClass[tone]}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-300">{label}</p>
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-50">{value}</h3>
      </div>
      <Icon className="h-6 w-6 text-slate-500 dark:text-slate-300" aria-hidden />
    </div>
  </Card>
)
