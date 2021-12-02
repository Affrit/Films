import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';
//import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelector } from '../PrivateRoute/selector';
import './style.scss';

export const Page403 = () => {
  //const navigate = useNavigate()
  const { isAuth } = useSelector(authSelector)

  /*
  useEffect(() => {
    console.log(isAuth)
    navigate(-1)
  }, [isAuth])
  */

  return (
    <>
      {isAuth ? <Navigate to="/favorites" /> :
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
      }
    </>
  )
}
