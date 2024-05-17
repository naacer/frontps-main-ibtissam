import React from 'react'
import { EventCard } from './EventCard'

export const Events = () => {
  return (
<div className='flex flex-wrap gap-5 justify-center'>

    {[1,1,1].map((item)=><EventCard/>)}
  

    </div>
  )
}
