import React from 'react';
import { Layout } from 'antd';
import './style.scss';

const { Sider } = Layout

export const SiderApp = ({ children }) => {
  return (
    <Layout>
      <Sider
        theme='lite'
        width={'200px'}
        className="site-layout-background"
        breakpoint="lg"
        collapsedWidth="0" 
      >
        {children}
      </Sider>
    </Layout>
  )
}
