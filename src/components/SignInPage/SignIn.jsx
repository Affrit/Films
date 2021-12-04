// libs
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// components
import { Form, Input, Button, Checkbox, Alert } from 'antd';
// other
import { loginUser, setClearError } from '../../store/actions/authActions';
import { authSelector } from '../PrivateRoute/selector';
import { spawnErorrsText } from '../../helpers/spawnErrorsText';
import './style.scss';

export const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth, errors } = useSelector(authSelector)

  useEffect(() => {
    if (isAuth) {
      navigate('/movie')
    }
    return () => {
      dispatch(setClearError())
    }
  }, [isAuth, navigate, dispatch])

  const onFinish = (values) => {
    dispatch(loginUser(values))
  }

  const onAlertClose = () => {
    dispatch(setClearError())
  }

  return (
    <div className='form-page'>
      <h1 className='form-page__title'>Welcome to movies catalog!</h1>
      <Form
        name="signIn"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className='form'
      >
        <h2 className='form__title'>Log in</h2>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: 'Please input your username!' },
            { type: 'string', min: 3 }
          ]}
        >
          <Input placeholder="username" data-testid="username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { type: 'string', min: 3 }
          ]}
        >
          <Input.Password placeholder="password" data-testid="password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>

        <div className='form-page__info'>
          <span>don't have an account yet? </span>
          <Link to="sign-up">sign up</Link>
        </div>

        <div className='form-page__alert'>
          {errors.length ?
            <Alert
              message="Login error"
              description={spawnErorrsText(errors)}
              onClose={onAlertClose}
              type="error"
              className='form-page__error'
              closable
            /> : ''
          }
        </div>
      </Form>
    </div>
  )
}
