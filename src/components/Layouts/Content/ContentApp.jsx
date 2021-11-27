import React from 'react';
import './style.scss'
import { Layout } from 'antd';

const { Content } = Layout

export const ContentApp = ({ children }) => {
  return (
      <Content className="site-layout">
        <div className="site-layout__inner" style={{ backgroundImage: 'url("https://static.tildacdn.com/tild6539-3237-4064-a533-653737616437/ebookbg_2.jpg")'}}>
          {children}
        </div>
      </Content>
  )
}

