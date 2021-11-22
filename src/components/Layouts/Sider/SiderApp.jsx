import React from 'react';
import './style.scss'
import { Layout } from 'antd';

const { Sider } = Layout

export const SiderApp = ({ children }) => {
  return (
    <Layout>
      <Sider
        theme='dark'
        width={200}
        className="site-layout-background"
        collapsible={false}
        breakpoint="lg" 
      >
        {children}
      </Sider>
    </Layout>
  )
}
