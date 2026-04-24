import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { JourneyDetail } from '../components/journey/JourneyDetail'
import { StaffActionPanel } from '../components/staff/StaffActionPanel'
import { Skeleton } from '../components/ui/Skeleton'
import { usePatients } from '../hooks/usePatients'
import type { Patient } from '../types'

export const JourneyDetailPage = () => {
  const { id } = useParams()
  const { patients, loading, error } = usePatients()
  const [localPatients, setLocalPatients] = useState<Patient[]>([])

  const dataSource = localPatients.length ? localPatients : patients
  const patient = useMemo(() => dataSource.find((entry) => entry.id === id), [dataSource, id])

  const handleUpdate = (next: Patient) => {
    const current = dataSource.map((entry) => (entry.id === next.id ? next : entry))
    setLocalPatients(current)
  }

  if (loading) {
    return <section className="space-y-3">{Array.from({ length: 5 }).map((_, idx) => <Skeleton key={idx} className="h-20" />)}</section>
  }
  if (error) return <p className="text-rose-600">{error}</p>
  if (!patient) return <p className="text-slate-600 dark:text-slate-300">Patient record not found.</p>

  return (
    <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <JourneyDetail patient={patient} />
      <StaffActionPanel patient={patient} onUpdatePatient={handleUpdate} />
    </section>
  )
}
