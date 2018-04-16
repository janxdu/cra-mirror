import { Breadcrumb, Layout, Menu } from 'antd';
import 'kx-components/index.css';
import React from 'react';
import { Route } from './framework/kx-mirrorx';
import FormsModel from './model/FormsModel';
import ComponentsPage from './page/ComponentsPage';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    const { selectMenu, selectSubMenu, selectSubMenuItem } = this.props;

    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectMenu]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="component">组件</Menu.Item>
            <Menu.Item key="commonLayout">常见布局</Menu.Item>
            <Menu.Item key="dataRequest">数据请求</Menu.Item>
            <Menu.Item key="loading">预载/切换</Menu.Item>
            <Menu.Item key="forms">表单</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultOpenKeys={[selectSubMenu]}
              defaultSelectedKeys={[selectSubMenuItem]}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="component-common" title={<span>通用</span>}>
                <Menu.Item key="component-common-login">登录框</Menu.Item>
                <Menu.Item key="component-common-iconLabel">带提示的图标</Menu.Item>
                <Menu.Item key="component-common-money">货币显示</Menu.Item>
              </SubMenu>
              <SubMenu key="commonLayout-page" title={<span>页面</span>}>
                <Menu.Item key="commonLayout-page-headerFooter">Header+Footer</Menu.Item>
                <Menu.Item key="commonLayout-page-sidebar">左侧边栏</Menu.Item>
              </SubMenu>
              <SubMenu key="commonLayout-component" title={<span>组件</span>}>
                <Menu.Item key="commonLayout-component-item">项目条目</Menu.Item>
                <Menu.Item key="commonLayout-component-detail">项目详情</Menu.Item>
              </SubMenu>
              <SubMenu key="dataRequest-ajax" title={<span>AJAX请求</span>}>
                <Menu.Item key="dataRequest-ajax-get">Get</Menu.Item>
                <Menu.Item key="dataRequest-ajax-post">Post</Menu.Item>
              </SubMenu>
              <SubMenu key="dataRequest-file" title={<span>文件</span>}>
                <Menu.Item key="dataRequest-file-upload">上传</Menu.Item>
              </SubMenu>
              <SubMenu key="loading-spin" title={<span>转转转</span>}>
                <Menu.Item key="loading-spin-page">页面</Menu.Item>
                <Menu.Item key="loading-spin-fragment">内部块</Menu.Item>
              </SubMenu>
              <SubMenu key="forms-validation" title={<span>校验</span>}>
                <Menu.Item key="forms-validation-general">普通校验</Menu.Item>
                <Menu.Item key="forms-validation-ajax">AJAX校验</Menu.Item>
              </SubMenu>
              <SubMenu key="forms-layout" title={<span>表单布局</span>}>
                <Menu.Item key="forms-layout-labelValue">Label/Value</Menu.Item>
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
