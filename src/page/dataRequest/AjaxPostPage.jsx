import { Col, Form, Row, Spin } from 'antd';
import React from 'react';
import AjaxPostForm from '../../form/AjaxPostForm';

export default class AjaxPostPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clickMeLoading, content, loadContentSpin } = this.props;
    const WrappedAjaxPostForm = Form.create()(AjaxPostForm);
    return (
      <section>
        <h1>场景</h1>
        <section>
          用于发出Ajax的Post请求。
        </section>
        <h2 className="demo-title">演示</h2>
        <section className="demo-box">
          < WrappedAjaxPostForm />
        </section>
        <section className="demo-box">
          <Row>
            <Col span={24}>
              <Spin spinning={true}>
                <div style={{
                  marginTop: '10px',
                  border: '1px dashed #ebedf0',
                  borderRadius: '2px',
                  height: '100px'
                }}>{content}
                </div>
              </Spin>
            </Col>
          </Row>
        </section>
      </section>
    );
  }

  handleSubmit() {

  }
}
