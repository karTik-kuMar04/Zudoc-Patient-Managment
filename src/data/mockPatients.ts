import type { Patient } from '../types'

export const MOCK_DELAY_MS = 1200

export const mockPatients: Patient[] = [
  {
    id: 'PAT-1001',
    maskedId: 'PAT-****01',
    name: 'Aarav Mehta',
    currentStage: 'Consultation',
    status: 'in-progress',
    waitingTime: 35,
    unit: 'Cardiology',
    assignedFacility: 'Zudoc Main Hospital',
    flags: [],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T07:40:00Z', notes: 'Insurance verified at front desk', completedBy: 'Nurse R. Singh' },
      { stage: 'Consultation', status: 'active', timestamp: null, notes: 'Vitals under review by cardiology resident' },
      { stage: 'Lab', status: 'pending', timestamp: null, notes: 'Troponin panel pending order' },
      { stage: 'Pharmacy', status: 'pending', timestamp: null, notes: 'Medication handoff not started' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'Awaiting specialist recommendation' },
    ],
  },
  {
    id: 'PAT-1002', maskedId: 'PAT-****02', name: 'Ira Nair', currentStage: 'Lab', status: 'delayed', waitingTime: 150, unit: 'Neurology', assignedFacility: 'Zudoc Main Hospital', flags: ['Lab backlog'],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T06:55:00Z', notes: 'Emergency referral admitted', completedBy: 'Admin K. Das' },
      { stage: 'Consultation', status: 'completed', timestamp: '2026-04-24T07:30:00Z', notes: 'Neurology consult completed', completedBy: 'Dr. A. Banerjee' },
      { stage: 'Lab', status: 'active', timestamp: null, notes: 'MRI queue delayed due to maintenance' },
      { stage: 'Pharmacy', status: 'pending', timestamp: null, notes: 'Awaiting lab completion' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'Pending neurologist signoff' },
    ],
  },
  {
    id: 'PAT-1003', maskedId: 'PAT-****03', name: 'Rehan Kapoor', currentStage: 'Registration', status: 'waiting', waitingTime: 20, unit: 'General', assignedFacility: 'Zudoc West Clinic', flags: [],
    timeline: [
      { stage: 'Registration', status: 'active', timestamp: null, notes: 'Document check in progress at kiosk' },
      { stage: 'Consultation', status: 'pending', timestamp: null, notes: 'Doctor assignment pending' },
      { stage: 'Lab', status: 'pending', timestamp: null, notes: 'No tests ordered yet' },
      { stage: 'Pharmacy', status: 'pending', timestamp: null, notes: 'Prescription pending consult' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'No discharge plan generated' },
    ],
  },
  {
    id: 'PAT-1004', maskedId: 'PAT-****04', name: 'Maya Shah', currentStage: 'Discharge', status: 'discharged', waitingTime: 15, unit: 'Orthopaedics', assignedFacility: 'Zudoc East Centre', flags: [],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T05:35:00Z', notes: 'Scheduled follow-up arrival', completedBy: 'Admin P. Rao' },
      { stage: 'Consultation', status: 'completed', timestamp: '2026-04-24T06:10:00Z', notes: 'Post-op mobility reviewed', completedBy: 'Dr. R. Pillai' },
      { stage: 'Lab', status: 'completed', timestamp: '2026-04-24T06:50:00Z', notes: 'Inflammation markers stable', completedBy: 'Lab Tech J. Costa' },
      { stage: 'Pharmacy', status: 'completed', timestamp: '2026-04-24T07:20:00Z', notes: 'Pain medication dispensed', completedBy: 'Pharm. L. Fernandes' },
      { stage: 'Discharge', status: 'completed', timestamp: '2026-04-24T07:35:00Z', notes: 'Discharge instructions signed', completedBy: 'Nurse M. Dutta' },
    ],
  },
  {
    id: 'PAT-1005', maskedId: 'PAT-****05', name: 'Sana Qureshi', currentStage: 'Pharmacy', status: 'in-progress', waitingTime: 85, unit: 'Emergency', assignedFacility: 'Zudoc Main Hospital', flags: ['High-risk follow-up'],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T04:55:00Z', notes: 'ER walk-in triaged', completedBy: 'Admin T. Ali' },
      { stage: 'Consultation', status: 'completed', timestamp: '2026-04-24T05:18:00Z', notes: 'ER physician cleared medication plan', completedBy: 'Dr. K. Verma' },
      { stage: 'Lab', status: 'completed', timestamp: '2026-04-24T06:02:00Z', notes: 'CBC and electrolyte panel completed', completedBy: 'Lab Tech E. Roy' },
      { stage: 'Pharmacy', status: 'active', timestamp: null, notes: 'Medication reconciliation with caregiver' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'Awaiting counseling completion' },
    ],
  },
  {
    id: 'PAT-1006', maskedId: 'PAT-****06', name: 'Kabir Malhotra', currentStage: 'Lab', status: 'waiting', waitingTime: 60, unit: 'Cardiology', assignedFacility: 'Zudoc Main Hospital', flags: [],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T07:05:00Z', notes: 'Pre-op check-in complete', completedBy: 'Nurse V. Sen' },
      { stage: 'Consultation', status: 'completed', timestamp: '2026-04-24T07:42:00Z', notes: 'Echo requisition generated', completedBy: 'Dr. I. Khanna' },
      { stage: 'Lab', status: 'active', timestamp: null, notes: 'Cardiac imaging room assignment pending' },
      { stage: 'Pharmacy', status: 'pending', timestamp: null, notes: 'Medication package in queue' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'Pending procedural report' },
    ],
  },
  {
    id: 'PAT-1007', maskedId: 'PAT-****07', name: 'Anika Bose', currentStage: 'Consultation', status: 'delayed', waitingTime: 240, unit: 'General', assignedFacility: 'Zudoc West Clinic', flags: ['Specialist unavailable'],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T03:40:00Z', notes: 'Priority referral from partner clinic', completedBy: 'Admin D. Pal' },
      { stage: 'Consultation', status: 'active', timestamp: null, notes: 'Senior consultant delayed due emergency call' },
      { stage: 'Lab', status: 'pending', timestamp: null, notes: 'Lab order not yet approved' },
      { stage: 'Pharmacy', status: 'pending', timestamp: null, notes: 'Awaiting consult notes' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'No estimated discharge yet' },
    ],
  },
  {
    id: 'PAT-1008', maskedId: 'PAT-****08', name: 'Nikhil Arora', currentStage: 'Registration', status: 'waiting', waitingTime: 25, unit: 'Emergency', assignedFacility: 'Zudoc Main Hospital', flags: [],
    timeline: [
      { stage: 'Registration', status: 'active', timestamp: null, notes: 'Emergency contact details being validated' },
      { stage: 'Consultation', status: 'pending', timestamp: null, notes: 'Triage doctor assignment pending' },
      { stage: 'Lab', status: 'pending', timestamp: null, notes: 'No diagnostics assigned' },
      { stage: 'Pharmacy', status: 'pending', timestamp: null, notes: 'No medication order yet' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'No discharge workflow started' },
    ],
  },
  {
    id: 'PAT-1009', maskedId: 'PAT-****09', name: 'Ritu Arvind', currentStage: 'Pharmacy', status: 'waiting', waitingTime: 95, unit: 'Neurology', assignedFacility: 'Zudoc East Centre', flags: ['Medication stock check'],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T06:12:00Z', notes: 'Direct neurology booking', completedBy: 'Admin Y. Prasad' },
      { stage: 'Consultation', status: 'completed', timestamp: '2026-04-24T06:40:00Z', notes: 'Migraine protocol recommended', completedBy: 'Dr. Z. Iyer' },
      { stage: 'Lab', status: 'completed', timestamp: '2026-04-24T07:22:00Z', notes: 'CT scan clear with no acute findings', completedBy: 'Lab Tech R. Bose' },
      { stage: 'Pharmacy', status: 'active', timestamp: null, notes: 'Awaiting medicine inventory confirmation' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'Discharge after counseling and handover' },
    ],
  },
  {
    id: 'PAT-1010', maskedId: 'PAT-****10', name: 'Parth Vyas', currentStage: 'Discharge', status: 'in-progress', waitingTime: 45, unit: 'Orthopaedics', assignedFacility: 'Zudoc Main Hospital', flags: [],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T07:08:00Z', notes: 'Follow-up admission processed', completedBy: 'Admin C. Naik' },
      { stage: 'Consultation', status: 'completed', timestamp: '2026-04-24T07:37:00Z', notes: 'Fracture recovery reviewed', completedBy: 'Dr. T. Joseph' },
      { stage: 'Lab', status: 'completed', timestamp: '2026-04-24T08:00:00Z', notes: 'X-ray confirms alignment', completedBy: 'Lab Tech F. Khan' },
      { stage: 'Pharmacy', status: 'completed', timestamp: '2026-04-24T08:14:00Z', notes: 'Medication and brace handed over', completedBy: 'Pharm. N. Gupta' },
      { stage: 'Discharge', status: 'active', timestamp: null, notes: 'Final education and transport planning' },
    ],
  },
  {
    id: 'PAT-1011', maskedId: 'PAT-****11', name: 'Devika Menon', currentStage: 'Lab', status: 'in-progress', waitingTime: 70, unit: 'General', assignedFacility: 'Zudoc West Clinic', flags: [],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T06:48:00Z', notes: 'Routine health package check-in', completedBy: 'Nurse B. Iqbal' },
      { stage: 'Consultation', status: 'completed', timestamp: '2026-04-24T07:16:00Z', notes: 'Physician requested thyroid panel', completedBy: 'Dr. P. Nanda' },
      { stage: 'Lab', status: 'active', timestamp: null, notes: 'Sample processing underway' },
      { stage: 'Pharmacy', status: 'pending', timestamp: null, notes: 'Prescription pending test result' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'To be finalized after physician review' },
    ],
  },
  {
    id: 'PAT-1012', maskedId: 'PAT-****12', name: 'Vikram Reddy', currentStage: 'Consultation', status: 'waiting', waitingTime: 40, unit: 'Cardiology', assignedFacility: 'Zudoc East Centre', flags: [],
    timeline: [
      { stage: 'Registration', status: 'completed', timestamp: '2026-04-24T07:28:00Z', notes: 'Walk-in with chest discomfort complaint', completedBy: 'Admin S. Matthew' },
      { stage: 'Consultation', status: 'active', timestamp: null, notes: 'Awaiting consultant call-in' },
      { stage: 'Lab', status: 'pending', timestamp: null, notes: 'ECG and enzyme tests likely next' },
      { stage: 'Pharmacy', status: 'pending', timestamp: null, notes: 'Dependent on physician orders' },
      { stage: 'Discharge', status: 'pending', timestamp: null, notes: 'No discharge route selected' },
    ],
  },
]
