import { AlertTriangle, Clock3, Hospital, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

import { MiniDashboard } from '../components/dashboard/MiniDashboard'
import { Card } from '../components/ui/Card'
import { Skeleton } from '../components/ui/Skeleton'
import { usePatients } from '../hooks/usePatients'
import { formatWaitTime } from '../utils/formatters'

export const DashboardPage = () => {
  const { patients, loading, error } = usePatients()

  if (loading) {
    return <section className="grid gap-4 md:grid-cols-4">{Array.from({ length: 4 }).map((_, idx) => <Skeleton key={idx} className="h-24" />)}</section>
  }
  if (error) return <p className="text-rose-600">{error}</p>

  const waitingPatients = patients.filter((patient) => patient.status === 'waiting').length
  const delayedCases = patients.filter((patient) => patient.status === 'delayed').length
  const averageWait = Math.round(patients.reduce((sum, patient) => sum + patient.waitingTime, 0) / patients.length)
  const recent = [...patients].slice(0, 5)

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MiniDashboard icon={Hospital} label="Total Patients Today" value={String(patients.length)} tone="primary" />
        <MiniDashboard icon={Users} label="Waiting Patients" value={String(waitingPatients)} tone="success" />
        <MiniDashboard icon={AlertTriangle} label="Delayed Cases" value={String(delayedCases)} tone="warning" />
        <MiniDashboard icon={Clock3} label="Average Wait Time" value={formatWaitTime(averageWait)} tone="danger" />
      </div>
      <Card><h3 className="mb-3 font-semibold text-slate-800 dark:text-slate-100">Recent Patients</h3><ul className="space-y-2">{recent.map((patient) => (<li key={patient.id} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 dark:bg-slate-700/40"><div><p className="font-medium text-slate-800 dark:text-slate-100">{patient.name}</p><p className="text-xs text-slate-500 dark:text-slate-300">{patient.maskedId} • {patient.currentStage}</p></div><Link aria-label={`open details for ${patient.name}`} to={`/patients/${patient.id}`} className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-300">View</Link></li>))}</ul></Card>
    </section>
  )
}
