// libs
import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
// components
import { Result, Button } from 'antd';
// other
import { authSelector } from '../PrivateRoute/selector';
import './style.scss';

export const Page403 = () => {
  const { isAuth } = useSelector(authSelector)

  return (
    <>
      {isAuth ? <Navigate to="/favorites" /> :
        <div className='page403'>
          <Result
            className='page403__content'
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
              <Link to="/">
                <Button type="primary">Go to login</Button>
              </Link>
            }
          />
        </div>
      }
    </>
  )
}
