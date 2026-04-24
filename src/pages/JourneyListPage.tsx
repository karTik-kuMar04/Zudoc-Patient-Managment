import { JourneyList } from '../components/journey/JourneyList'
import { Skeleton } from '../components/ui/Skeleton'
import { usePatients } from '../hooks/usePatients'

export const JourneyListPage = () => {
  const { patients, loading, error } = usePatients()

  if (loading) {
    return <section className="space-y-2">{Array.from({ length: 6 }).map((_, idx) => <Skeleton key={idx} className="h-12" />)}</section>
  }
  if (error) return <p className="text-rose-600">{error}</p>
  return <JourneyList patients={patients} />
}
