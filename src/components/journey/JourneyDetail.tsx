import type { Patient } from '../../types'
import { StatusBadge } from '../ui/StatusBadge'
import { Timeline } from './Timeline'

export const JourneyDetail = ({ patient }: { patient: Patient }) => (
  <section className="space-y-4">
    <header className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-800">
      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{patient.name}</h2>
      <p className="text-sm text-slate-500 dark:text-slate-300">{patient.maskedId} • {patient.unit}</p>
      <div className="mt-2"><StatusBadge status={patient.status} /></div>
    </header>
    <Timeline timeline={patient.timeline} />
  </section>
)
