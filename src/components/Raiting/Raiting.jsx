import React from 'react';
import './style.css'

export const Raiting = ({ rating }) => {
  const percent = rating * 10
  return (
    <div className='raiting'>
      <span className='raiting__value'>{percent}<sup>%</sup></span>
    </div>
  )
}
