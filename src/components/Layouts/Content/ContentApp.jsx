import { Layout } from 'antd';

const { Content } = Layout

export const ContentApp = ({ children }) => {
  return (
      <Content className="site-layout" style={{ paddingTop: '60px'}}>
        <div className="site-layout-background" style={{ display: 'flex', justifyContent: 'center' }}>
          {children}
        </div>
      </Content>
  )
}

