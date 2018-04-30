import { Col, Form, Row, Spin } from 'antd';
import React from 'react';
import KxUserLoginForm from '../form/KxUserLoginForm';
import UserLoginForm from '../form/UserLoginForm';

export default class FormsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const WrappedUserLoginForm = Form.create()(UserLoginForm);
    const WrappedKxUserLoginForm = Form.create()(KxUserLoginForm);
    const { userLoginErrorCode, userLoginErrorMsg, userInfo, loginSpin, loginSagaSpin } = this.props;

    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            登录状态码：{userLoginErrorCode}
          </Col>
          <Col className="gutter-row" span={24}>
            错误信息：{userLoginErrorMsg}
          </Col>
          <Col className="gutter-row" span={24}>
            用户名：{userInfo.username}
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Spin spinning={loginSpin === true}>
              <WrappedUserLoginForm />
            </Spin>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Spin spinning={loginSagaSpin === true}>
              <WrappedKxUserLoginForm />
            </Spin>
          </Col>
        </Row>
      </div>
    );
  }
}
