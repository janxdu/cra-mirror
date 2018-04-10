import { Col, Form, Row } from 'antd';
import React from 'react';
import UserLoginForm from '../form/UserLoginForm';

export default class FormsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const WrappedUserLoginForm = Form.create()(UserLoginForm);
    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={4}>
            <WrappedUserLoginForm />
          </Col>
        </Row>
      </div>
    );
  }
}
