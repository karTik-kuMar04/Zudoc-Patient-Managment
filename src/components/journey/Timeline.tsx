import type { StageEntry } from '../../types'
import { formatTimestamp } from '../../utils/formatters'
import { StatusBadge } from '../ui/StatusBadge'

export const Timeline = ({ timeline }: { timeline: StageEntry[] }) => (
  <section className="space-y-4">
    {timeline.map((entry) => (
      <article key={entry.stage} className="flex gap-3 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
        <div className="pt-1">
          {entry.status === 'completed' && <span className="block h-3 w-3 rounded-full bg-emerald-500" aria-label="completed stage indicator" />}
          {entry.status === 'active' && <span className="block h-3 w-3 animate-pulse rounded-full border-2 border-indigo-600" aria-label="active stage indicator" />}
          {entry.status === 'pending' && <span className="block h-3 w-3 rounded-full border border-slate-400" aria-label="pending stage indicator" />}
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-slate-800 dark:text-slate-100">{entry.stage}</h4>
          <StatusBadge status={entry.status} />
          <p className="text-sm text-slate-500 dark:text-slate-300">{entry.status === 'active' ? 'In Progress' : formatTimestamp(entry.timestamp)}</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">{entry.notes}</p>
          {entry.completedBy && <p className="text-xs text-slate-500 dark:text-slate-400">Completed by {entry.completedBy}</p>}
        </div>
      </article>
    ))}
  </section>
)
