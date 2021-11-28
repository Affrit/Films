import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { setUserData, loginUser } from '../../store/actions/authActions';
import './style.scss'
import { useNavigate } from 'react-router';
import { authSelector } from '../PrivateRoute/selector';
import { Navigate } from 'react-router';
import { Alert } from 'antd';
import { setClearError } from '../../store/actions/authActions';

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

  const spawnErorrsText = () => {
    const errorsText = errors.reduce((error, acc) => `${error}, ${acc}`)
    return errorsText
  }

  return (
    <div className='signIn'>
      {errors.length ?
        <Alert
          message="Login error"
          description={spawnErorrsText()}
          onClose={onAlertClose}
          type="error"
          className='login-error'
          closable
        /> : ''
      }

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className='login-form'
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
      </Form>
    </div>
  )
}
