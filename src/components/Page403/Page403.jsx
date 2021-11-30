import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import './style.scss';

export const Page403 = () => {
  return (
    <div className='page403'>
      <Result
        className='page403__content'
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Link to="/">
          <Button type="primary">Go to login</Button>
        </Link>}
      />
    </div>
  )
}
