import { Breadcrumb, Icon, Layout, Menu } from 'antd';
import 'kx-components/index.css';
import React from 'react';
import { Route } from './components/kx-mirrorx';
import FormsModel from './model/FormsModel';
import ComponentsPage from './page/ComponentsPage';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('app componentDidMount');
  }

  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    console.log('render');
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['component']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="component">组件</Menu.Item>
            <Menu.Item key="commonLayout">常见布局</Menu.Item>
            <Menu.Item key="dataRequest">数据请求</Menu.Item>
            <Menu.Item key="loading">预载/切换</Menu.Item>
            <Menu.Item key="forms">表单</Menu.Item>
            <Menu.Item key="router">路由</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Route exact path="/" component={ComponentsPage} />
              <Route exact path="/forms" component={FormsModel} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
