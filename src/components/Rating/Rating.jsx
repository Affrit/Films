import React from 'react';
import { Tooltip, Progress } from 'antd';
import './style.scss'

export const Rating = ({ rating, vote_count }) => {
  const percent = rating * 10
  return (
    <Tooltip title={vote_count ? `based on ${vote_count} votes` : ''}>
      <Progress
        percent={percent}
        success={{ percent: percent }}
        type="circle" width={45}
        format={() => percent}
      />
    </Tooltip>
  )
}
