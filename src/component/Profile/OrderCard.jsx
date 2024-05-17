import { Card } from '@mui/material'
import React from 'react'

export const OrderCard = ({item,order}) => {
  return (
    <Card className='flex justify-between items-start p-5'>
    <div className='flex items-center space-x-5'>
    <img className='h-16 W-16' 
      src={item.food.images[0]}
      alt=""
    />
    <div>
      <p>{item.food.name}</p>
      <p>{item.totalPrice} MAD</p>
    </div> 
    </div>
    <div>
      <button className='cursor-not-allowed'>
        {order.orderStatus}
      </button>
    </div>

    </Card>
  )
}
