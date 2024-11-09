import { Countdown } from '@/components/countdown'
import { Liveclock } from '@/components/liveclock'
import React from 'react'

const Page = () => {
  return (
  <>  
    <div>
      <Countdown/>
    
      <Liveclock/>
    </div>
  </>
  )
}

export default Page