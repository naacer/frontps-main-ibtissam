import { Label } from '@mui/icons-material';
import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import OrderTable from './OrderTable';


const orderStatus=[
  {Label:"Pending", value:"PANDING"},
  {Label:"Completed", value:"COMPLETED"},
  {Label:"All", value:"ALL"}

]
const Orders = () => {
  const [filterValue,setFilterValue]=useState();

  const handleFilter=(e,value)=>{
    setFilterValue(value)
  }
  return (
    <div className='px-2'>
      <Card className='p-5'>
<Typography sx={{paddingBottom:"1rem"}} variant='h5'>
Order Status
</Typography>
<FormControl>
  <RadioGroup 
  onChange={handleFilter} 
  row name='category'
  value={filterValue || "all"}>
    {orderStatus.map((item)=><FormControlLabel
    key={item.Label}
    value={item.value}
    control={<Radio/>}
    label={item.Label}
    sx={{color:"gray"}}
    />)}

  </RadioGroup>
</FormControl>
      </Card>
      <OrderTable/>
      
    </div>
  )
}

export default Orders
