import type { PatientStatus, StageStatus } from '../../types'

type BadgeStatus = PatientStatus | StageStatus

const badgeStyles: Record<BadgeStatus, string> = {
  waiting: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-100',
  'in-progress': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-200',
  delayed: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200',
  discharged: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200',
  completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200',
  active: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-200',
  pending: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-100',
}

export const StatusBadge = ({ status }: { status: BadgeStatus }) => (
  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${badgeStyles[status]}`}>
    {status.replace('-', ' ')}
  </span>
)
