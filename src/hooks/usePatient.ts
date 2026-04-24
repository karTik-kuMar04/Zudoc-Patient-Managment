import { useMemo } from 'react'

import { usePatients } from './usePatients'

export const usePatient = (id: string | undefined) => {
  const { patients, loading, error, setPatients } = usePatients()

  const patient = useMemo(() => {
    return patients.find((entry) => entry.id === id)
  }, [id, patients])

  return { patient, loading, error, setPatients }
}
