import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProductSmall1 from '../../assets/images/relate1.png'
import imageProductSmall2 from '../../assets/images/relate2.png'
import imageProductSmall3 from '../../assets/images/relate3.png'


const RelatedProductsComponent = () => {
    return (
      <div>
        <h2>Sản phẩm liên quan</h2>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Image src={imageProductSmall1} alt="Related Product 1" preview={false} />
            <p>OPPO A79</p>
          </Col>
          <Col span={8} >
            <Image src={imageProductSmall2} alt="Related Product 2" preview={false} />
            <p>OPPO A58</p>
          </Col>
          <Col span={8}>
            <Image src={imageProductSmall3} alt="Related Product 3" preview={false} />
            <p>OPPO A60</p>
          </Col>
        </Row>
      </div>
    );
  };

export default RelatedProductsComponent