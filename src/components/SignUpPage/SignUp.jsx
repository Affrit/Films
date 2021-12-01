// libs
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// components
import { Form, Input, Button, Alert } from 'antd';
// other
import { setNewUser, setClearError } from '../../store/actions/authActions';
import { authSelector } from '../PrivateRoute/selector';
import { spawnErorrsText } from '../../helpers/spawnErrorsText';
import './style.scss';

export const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth, errors } = useSelector(authSelector)

  useEffect(() => {
    if (isAuth) {
      navigate('/movie')
    }
  }, [isAuth, navigate])

  const onFinish = (values) => {
    dispatch(setNewUser(values))
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

        <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <div className='signIn__info'>
          <span>already have an account? </span><Link to="/">sign in</Link>
        </div>

        <div className='signIn__alert'>
          {errors.length ?
            <Alert
              message="Registration error"
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
