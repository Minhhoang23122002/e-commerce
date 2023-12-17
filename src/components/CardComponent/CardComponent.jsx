
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo1.png'
import logo1 from '../../assets/images/logo.png'


const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height:'200px'}}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px'}}
            cover={<img alt="example" src={logo1} />}
        >
           <WrapperImageStyle src={logo} />
            <StyleNameProduct>OppoA57</StyleNameProduct>
            <WrapperReportText>
              <span style={{ marginRight: '4px'}}>
                <span>5</span>  <StarFilled style={{fontSize:'12px', color:'yellow'}} />
              </span>
                <WrapperStyleTextSell>| Đã bán 4.4k</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px'}}>3.290.000</span>
                <WrapperDiscountText>-34%</WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent