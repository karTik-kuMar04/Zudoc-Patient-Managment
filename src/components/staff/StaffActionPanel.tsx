import { useState } from 'react'

import { useToast } from '../../hooks/useToast'
import { TREATMENT_STAGES } from '../../data/mockStages'
import type { Patient } from '../../types'
import { Button } from '../ui/Button'

interface StaffActionPanelProps {
  patient: Patient
  onUpdatePatient: (next: Patient) => void
}

export const StaffActionPanel = ({ patient, onUpdatePatient }: StaffActionPanelProps) => {
  const [note, setNote] = useState('')
  const { showToast } = useToast()

  const moveToNextStage = () => {
    if (patient.status === 'discharged') return
    const currentIndex = TREATMENT_STAGES.indexOf(patient.currentStage)
    const nextStage = TREATMENT_STAGES[Math.min(currentIndex + 1, TREATMENT_STAGES.length - 1)]
    const nextTimeline = patient.timeline.map((entry) => {
      if (entry.stage === patient.currentStage) return { ...entry, status: 'completed' as const, timestamp: new Date().toISOString(), completedBy: 'Assigned Staff' }
      if (entry.stage === nextStage) return { ...entry, status: 'active' as const, notes: `${entry.notes} | Escalated by staff` }
      return entry
    })
    onUpdatePatient({ ...patient, currentStage: nextStage, status: nextStage === 'Discharge' ? 'in-progress' : patient.status, timeline: nextTimeline, waitingTime: 0 })
    showToast('Moved patient to next treatment stage.', 'success')
  }

  const markCurrentStageComplete = () => {
    const nextTimeline = patient.timeline.map((entry) => entry.stage === patient.currentStage ? { ...entry, status: 'completed' as const, timestamp: new Date().toISOString(), completedBy: 'Assigned Staff' } : entry)
    onUpdatePatient({ ...patient, timeline: nextTimeline })
    showToast('Current stage marked complete.', 'success')
  }

  const submitNote = () => {
    if (!note.trim()) return
    const nextTimeline = patient.timeline.map((entry) => entry.stage === patient.currentStage ? { ...entry, notes: `${entry.notes} | Note: ${note.trim()}` } : entry)
    onUpdatePatient({ ...patient, timeline: nextTimeline })
    setNote('')
    showToast('Internal note added for staff.', 'success')
  }

  const flagIssue = () => {
    onUpdatePatient({ ...patient, status: 'delayed', flags: [...patient.flags, 'Flagged by staff'], waitingTime: patient.waitingTime + 10 })
    showToast('Patient marked as delayed and flagged.', 'warning')
  }

  return (
    <aside className="space-y-3 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-800">
      <h3 className="font-semibold text-slate-800 dark:text-slate-100">Staff Actions</h3>
      <Button aria-label="move patient to next stage" onClick={moveToNextStage} disabled={patient.status === 'discharged'} className="w-full">Move to Next Stage</Button>
      <Button aria-label="mark stage complete" variant="secondary" onClick={markCurrentStageComplete} className="w-full">Mark Stage Complete</Button>
      <textarea aria-label="add internal note" value={note} onChange={(event) => setNote(event.target.value)} rows={3} className="w-full rounded-md border border-slate-300 p-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
      <Button aria-label="submit internal note" variant="secondary" onClick={submitNote} className="w-full">Add Internal Note</Button>
      <Button aria-label="flag delay or issue" variant="warning" onClick={flagIssue} className="w-full">Flag Delay / Issue</Button>
    </aside>
  )
}
