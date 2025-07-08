'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

import ProfitabilityContainer from './container'

export default async function Page(): Promise<React.JSX.Element> {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/')
  }

  return <ProfitabilityContainer />
}
