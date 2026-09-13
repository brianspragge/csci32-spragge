import { ReactNode } from 'react'

interface PageProps {
  children: ReactNode
  className?: string
}
export function Page({ children, className = '' }: PageProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className={`flex w-full max-w-3xl flex-col items-center gap-2 p-24 ${className}`}>{children}</main>
    </div>
  )
}
