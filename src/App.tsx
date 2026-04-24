import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AppLayout } from './components/layout/AppLayout'
import { Skeleton } from './components/ui/Skeleton'

const DashboardPage = lazy(() => import('./pages/DashboardPage').then((module) => ({ default: module.DashboardPage })))
const JourneyListPage = lazy(() => import('./pages/JourneyListPage').then((module) => ({ default: module.JourneyListPage })))
const JourneyDetailPage = lazy(() => import('./pages/JourneyDetailPage').then((module) => ({ default: module.JourneyDetailPage })))

const App = () => (
  <AppLayout>
    <Suspense fallback={<Skeleton className="h-24 w-full" />}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/patients" element={<JourneyListPage />} />
        <Route path="/patients/:id" element={<JourneyDetailPage />} />
      </Routes>
    </Suspense>
  </AppLayout>
)

export default App
