"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

const ALLOWED_ADMINS = ["pavan@hive.com", "sahil@nexaworks.tech"]

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState<boolean | null>(null)

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session || !session.user.email || !ALLOWED_ADMINS.includes(session.user.email)) {
        setAuthorized(false)
        router.replace("/admin")
      } else {
        setAuthorized(true)
      }
    }
    checkAuth()
  }, [router])

  if (authorized === null) {
    return (
      <div className="min-h-screen bg-[#030611] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!authorized) return null

  return <>{children}</>
}
