import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { loginUser } from '../../store/actions/authActions';
import './style.scss'
import { useNavigate } from 'react-router';
import { authSelector } from '../PrivateRoute/selector';
import { Navigate } from 'react-router';
import { Alert } from 'antd';
import { setClearError } from '../../store/actions/authActions';
import { Link } from 'react-router-dom';
import { spawnErorrsText } from '../../helpers/spawnErrorsText';

export const SignIn = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth, errors } = useSelector(authSelector)

  useEffect(() => {
    if (isAuth) {
      navigate('/movie')
    }
  }, [isAuth])

  const onFinish = (values) => {
    dispatch(loginUser(values))
  }

  const onAlertClose = () => {
    dispatch(setClearError())
  }

  return (
    <div className='signIn'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className='signIn__form'
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }, { type: 'string', min: 3 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }, { type: 'string', min: 3 }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <div className='signIn__info'>
          <span>didn't have an account? </span><Link to="sign-up">sign up</Link>
        </div>

        <div className='signIn__alert'>
          {errors.length ?
            <Alert
              message="Login error"
              description={spawnErorrsText(errors)}
              onClose={onAlertClose}
              type="error"
              className='signIn__error'
              closable
            /> : ''
          }
        </div>
      </Form>
    </div>
  )
}
