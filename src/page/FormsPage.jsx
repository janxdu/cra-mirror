import { Col, Form, Row } from 'antd';
import React from 'react';
import UserLoginForm from '../form/UserLoginForm';
import KxUserLoginForm from '../form/KxUserLoginForm';

export default class FormsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("FormsPage componentDidMount");
  }

  render() {
    const WrappedUserLoginForm = Form.create()(UserLoginForm);
    const WrappedKxUserLoginForm = Form.create()(KxUserLoginForm);
    const { userLoginErrorCode, userLoginErrorMsg, userInfo } = this.props;
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
            <WrappedUserLoginForm />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <WrappedKxUserLoginForm />
          </Col>
        </Row>
      </div>
    );
  }
}
