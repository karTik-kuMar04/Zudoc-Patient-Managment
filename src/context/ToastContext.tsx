/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useMemo, useState } from 'react'
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'

type ToastVariant = 'success' | 'warning' | 'error'

interface ToastItem {
  id: string
  message: string
  variant: ToastVariant
}

export interface ToastContextValue {
  showToast: (message: string, variant: ToastVariant) => void
}

const AUTO_DISMISS_MS = 3000
export const ToastContext = createContext<ToastContextValue | null>(null)

const variantStyles: Record<ToastVariant, string> = {
  success: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-100 dark:border-emerald-800',
  warning: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/40 dark:text-amber-100 dark:border-amber-800',
  error: 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-900/40 dark:text-rose-100 dark:border-rose-800',
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const showToast = (message: string, variant: ToastVariant) => {
    const id = crypto.randomUUID()
    setToasts((prev) => [...prev, { id, message, variant }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, AUTO_DISMISS_MS)
  }

  const value = useMemo(() => ({ showToast }), [])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <section aria-label="toast notifications" className="fixed right-4 bottom-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <article key={toast.id} className={`flex w-80 items-center gap-2 rounded-lg border p-3 text-sm shadow-md ${variantStyles[toast.variant]}`}>
            {toast.variant === 'success' && <CheckCircle2 className="h-4 w-4" aria-hidden />}
            {toast.variant === 'warning' && <AlertTriangle className="h-4 w-4" aria-hidden />}
            {toast.variant === 'error' && <XCircle className="h-4 w-4" aria-hidden />}
            <span>{toast.message}</span>
          </article>
        ))}
      </section>
    </ToastContext.Provider>
  )
}
