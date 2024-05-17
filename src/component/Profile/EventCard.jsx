import {Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:300}}>
            <CardMedia 
            sx={{height:205}}
            image="https://th.bing.com/th/id/R.1af557c593f4c61f22f5aff55c5993c8?rik=nju%2fVfGO181QHQ&pid=ImgRaw&r=0"/>
            <CardContent>
                <Typography variant='h5'>
                    Italian Fast Food
                </Typography>
                <Typography variant='body2'>
                50% off on your first order
                </Typography>
                <div className='py-2 space-x-2'>
                <p>{"mumbai"}</p>
                <p className='text-sm text-blue-500'> February 14, 2024 12:00Am</p>
                <p className='text-sm text-red-500'> February 15, 2024 12:00Am</p>


                </div>
            </CardContent>
            {true && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>
                
            }

        </Card>
    </div>
  )
}
