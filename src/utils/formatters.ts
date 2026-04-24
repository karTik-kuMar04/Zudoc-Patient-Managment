const HIDDEN_ID_PREFIX = 'PAT-****'
const TIME_LOCALE = 'en-IN'

export const formatMaskedPatientId = (id: string): string => {
  const suffix = id.slice(-2)
  return `${HIDDEN_ID_PREFIX}${suffix}`
}

export const formatTimestamp = (value: string | null): string => {
  if (!value) return 'Not available'
  return new Date(value).toLocaleTimeString(TIME_LOCALE, {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const formatWaitTime = (minutes: number): string => `${minutes} min`
