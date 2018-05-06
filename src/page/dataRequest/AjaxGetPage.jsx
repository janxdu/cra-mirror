import { Button, Col, Row, Spin } from 'antd';
import React from 'react';
import { actions } from '../../framework/kx-mirrorx';

export default class AjaxGetPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { clickMeLoading, content, loadContentSpin } = this.props;

    return (
      <section>
        <h1>场景</h1>
        <section>
          用于发出Ajax的登陆请求。
        </section>
        <h2 className="demo-title">演示</h2>
        <Row>
          <Col span={24}>
            <section className="demo-box">
              <Row>
                <Col span={24}>
                  <Button type="primary" loading={clickMeLoading === true}
                          onClick={actions.ajaxGet.getHeadAccountInfo.bind(this)}>点击我</Button>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Spin spinning={loadContentSpin === true}>
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
          </Col>
        </Row>
      </section>
    );
  }
}
