import { Col, Row } from 'antd';
import { IconTip } from 'kx-components';
import React from 'react';


const IconLabelPage = () => (
  <section>
    <h1>场景</h1>
    <section>
      用于商品标题上的额外描述
    </section>
    <h2 className="demo-title">演示</h2>
    <Row>
      <Col span={6}>
        <section className="demo-box">
          <Row>
            <Col span={24}>
              <IconTip tip="这里是额外的描述" style={{ fontSize: '40px' }} />
            </Col>
          </Row>
        </section>
      </Col>
    </Row>
  </section>
);

export default IconLabelPage;
