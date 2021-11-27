import React from 'react';
import './style.scss'

export const Rating = ({ rating }) => {
  const percent = rating * 10
  return (
    <div className='raiting'>
      {
        percent ?
          <span className='raiting__value'>{percent}<sup>%</sup></span> :
          <span>NR</span>
      }
    </div>
  )
}
