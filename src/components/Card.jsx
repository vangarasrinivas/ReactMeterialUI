import { Button, Typography } from '@mui/material'
import React from 'react'

const Card = ({size, title, discription}) => {
  return (
    <div className='card'>
        <Typography variant='h2' component='h3'>{title}</Typography>
        <div className='card-body'>
            <Typography variant='body1'>
                {discription}
            </Typography>

        </div>
        <div className="card-footer">
            <Button variant='contained' size={size}>View</Button>
        </div>
        
    </div>
  )
}

export default Card