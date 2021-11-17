import { Layout } from 'antd';

const { Sider } = Layout

export const SiderApp = ({ children }) => {
  return (
    <Layout>
      <Sider theme='dark' width={200} className="site-layout-background" collapsible breakpoint="lg" style={{
        minHeight: '100vh',
      }} >
        { children }
      </Sider>
    </Layout>
  )
}
