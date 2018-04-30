import { Breadcrumb, Col, Icon, Layout, Row } from 'antd';
import React from 'react';

const { Header, Footer, Content, Sider } = Layout;
const SidebarPage = () => (
  <section>
    <h1>场景</h1>
    <section>
      类似账户概览页面的布局
    </section>
    <h2 className="demo-title">演示</h2>
    <Row>
      <Col span={24}>
        <section className="demo-box">
          <Row>
            <Col span={24}>
              <Layout>
                <Header className="kx-header">
                  <div className="kx-logo">
                    <a href="https://www.kxjf.com"><img src="https://www.kxjf.com/cms/resources/temps/logo.png" /></a>
                    <a href="https://www.kxjf.com/cms/aboutKxd/index.html"><img
                      src="https://www.kxjf.com/cms/cmsResource/temps/slogan.png" /></a>
                  </div>
                  <div className="kx-header-menu-main">
                    <ul className="kx-clearfix ">
                      <li className="kx-header-menu-item">
                        <a href="#" className="current">首页</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#">开金中心</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#">开鑫贷</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#" target="_blank">企业投资</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#" target="_blank">借款</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#" className="enter-my-account">
                          <span>
                            <Icon type="user" style={{ fontSize: '20px', marginRight: '10px' }} />我的账户
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Header>
                <Layout>
                  <Layout>
                    <Breadcrumb style={{ margin: '10px 0' }}>
                      <Breadcrumb.Item>首页</Breadcrumb.Item>
                      <Breadcrumb.Item>我的账户</Breadcrumb.Item>
                      <Breadcrumb.Item>账户概览</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="kx-user-account-box">
                      <Sider className="kx-user-account-sidebar">
                        <div className="kx-user-account-title">账户概览</div>
                        <ul>
                          <li className="tit">资产管理</li>
                          <li>定期</li>
                          <li>P2P</li>
                        </ul>
                      </Sider>
                      <Content>
                        <div className="kx-demo-body">
                          这里是内容
                        </div>
                      </Content>
                    </Layout>
                  </Layout>
                </Layout>
                <Footer style={{ backgroundColor: '#414141' }}>
                  这里是Footer
                </Footer>
              </Layout>
            </Col>
          </Row>
        </section>
      </Col>
    </Row>
  </section>
);

export default SidebarPage;
