import { AlertCircle } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { Patient, PatientStatus } from '../../types'
import { formatWaitTime } from '../../utils/formatters'
import { Input } from '../ui/Input'
import { StatusBadge } from '../ui/StatusBadge'

interface JourneyListProps {
  patients: Patient[]
}

export const JourneyList = ({ patients }: JourneyListProps) => {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<'all' | PatientStatus>('all')
  const [sortBy, setSortBy] = useState<'wait-asc' | 'wait-desc' | 'stage'>('wait-desc')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    const matches = patients.filter((patient) => {
      const bySearch = patient.name.toLowerCase().includes(search.toLowerCase()) || patient.maskedId.toLowerCase().includes(search.toLowerCase())
      const byStatus = status === 'all' || patient.status === status
      return bySearch && byStatus
    })
    return [...matches].sort((a, b) => {
      if (sortBy === 'wait-asc') return a.waitingTime - b.waitingTime
      if (sortBy === 'wait-desc') return b.waitingTime - a.waitingTime
      return a.currentStage.localeCompare(b.currentStage)
    })
  }, [patients, search, status, sortBy])

  if (!filtered.length) {
    return <div className="rounded-xl bg-white p-8 text-center text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-200"><AlertCircle className="mx-auto mb-2 h-5 w-5" aria-hidden />No patients match your filters.</div>
  }

  return (
    <section>
      <div className="mb-4 grid gap-3 md:grid-cols-3">
        <Input aria-label="search patients" placeholder="Search by name or masked ID" value={search} onChange={(event) => setSearch(event.target.value)} />
        <select aria-label="filter by status" value={status} onChange={(event) => setStatus(event.target.value as 'all' | PatientStatus)} className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
          <option value="all">All statuses</option><option value="waiting">Waiting</option><option value="in-progress">In Progress</option><option value="delayed">Delayed</option><option value="discharged">Discharged</option>
        </select>
        <select aria-label="sort patients" value={sortBy} onChange={(event) => setSortBy(event.target.value as 'wait-asc' | 'wait-desc' | 'stage')} className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
          <option value="wait-desc">Waiting time (high to low)</option><option value="wait-asc">Waiting time (low to high)</option><option value="stage">Stage (A-Z)</option>
        </select>
      </div>
      <div className="hidden overflow-hidden rounded-xl bg-white shadow-sm dark:bg-slate-800 md:block">
        <table className="w-full text-left text-sm"><thead className="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-200"><tr><th className="p-3">Patient Name</th><th className="p-3">Masked ID</th><th className="p-3">Current Stage</th><th className="p-3">Waiting Time</th><th className="p-3">Status</th><th className="p-3">Unit</th></tr></thead>
          <tbody>{filtered.map((patient) => (<tr key={patient.id} onClick={() => navigate(`/patients/${patient.id}`)} className="cursor-pointer border-t border-slate-100 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700/50"><td className="p-3 font-medium text-slate-800 dark:text-slate-100">{patient.name}</td><td className="p-3">{patient.maskedId}</td><td className="p-3">{patient.currentStage}</td><td className="p-3">{formatWaitTime(patient.waitingTime)}</td><td className="p-3"><StatusBadge status={patient.status} /></td><td className="p-3">{patient.unit}</td></tr>))}</tbody>
        </table>
      </div>
      <div className="space-y-3 md:hidden">{filtered.map((patient) => (<article key={patient.id} role="button" tabIndex={0} aria-label={`open ${patient.name} details`} onClick={() => navigate(`/patients/${patient.id}`)} onKeyDown={(event) => event.key === 'Enter' && navigate(`/patients/${patient.id}`)} className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-800"><div className="mb-2 flex items-center justify-between"><h3 className="font-semibold text-slate-800 dark:text-slate-100">{patient.name}</h3><StatusBadge status={patient.status} /></div><p className="text-sm text-slate-500 dark:text-slate-300">{patient.maskedId} • {patient.currentStage}</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{formatWaitTime(patient.waitingTime)} • {patient.unit}</p></article>))}</div>
    </section>
  )
}
