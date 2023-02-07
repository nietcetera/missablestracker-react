import { Breadcrumb, Col, Row, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <Row>
          <Col span={6} />
          <Col span={12}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key={1}>Home</Menu.Item>
              <Menu.Item key={2}>Guides</Menu.Item>
            </Menu>
          </Col>
          <Col span={6} />
        </Row>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Row>
          <Col span={6} />
          <Col span={12}>
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={6} />
        </Row>
        <Row>
          <Col span={6} />
          <Col span={12}>
            <div
              className="site-layout-content"
              style={{
                background: colorBgContainer,
                minHeight: "95vh",
                padding: "2em",
              }}
            >
              <Outlet />
            </div>
          </Col>
          <Col span={6} />
        </Row>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Footer
      </Footer>
    </Layout>
  );
}

export default App;
