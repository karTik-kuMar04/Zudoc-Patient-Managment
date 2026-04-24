export type StageStatus = 'completed' | 'active' | 'pending'
export type PatientStatus = 'waiting' | 'in-progress' | 'delayed' | 'discharged'
export type TreatmentStage =
  | 'Registration'
  | 'Consultation'
  | 'Lab'
  | 'Pharmacy'
  | 'Discharge'

export interface StageEntry {
  stage: TreatmentStage
  status: StageStatus
  timestamp: string | null
  notes: string
  completedBy?: string
}

export interface Patient {
  id: string
  maskedId: string
  name: string
  currentStage: TreatmentStage
  status: PatientStatus
  waitingTime: number
  unit: string
  assignedFacility: string
  timeline: StageEntry[]
  flags: string[]
}

export interface DashboardStat {
  label: string
  value: string
  tone: 'primary' | 'success' | 'warning' | 'danger'
}
