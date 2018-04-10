import { Col, Form, Row } from 'antd';
import React from 'react';
import UserLoginForm from '../form/UserLoginForm';

export default class FormsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const WrappedUserLoginForm = Form.create()(UserLoginForm);
    const { userLoginErrorCode, userLoginErrorMsg } = this.props;
    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            登录状态码：{userLoginErrorCode}
          </Col>
          <Col className="gutter-row" span={24}>
            错误信息：{userLoginErrorMsg}
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <WrappedUserLoginForm />
          </Col>
        </Row>
      </div>
    );
  }
}
