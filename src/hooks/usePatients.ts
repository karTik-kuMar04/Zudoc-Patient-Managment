import { useEffect, useState } from 'react'

import { mockPatients, MOCK_DELAY_MS } from '../data/mockPatients'
import type { Patient } from '../types'

export const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => {
          setTimeout(resolve, MOCK_DELAY_MS)
        })
        setPatients(mockPatients)
      } catch {
        setError('Unable to load patient journeys.')
      } finally {
        setLoading(false)
      }
    }

    fetchPatients()
  }, [])

  return { patients, loading, error, setPatients }
}
