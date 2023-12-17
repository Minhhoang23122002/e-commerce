import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'
import { useNavigate } from 'react-router-dom'

const TypeProductPage = () => {
    const navigate = useNavigate(); 

    const handleNavigateDetail = () => {
        navigate('/products-details');
    }
    const onChange = () => { }
    return (
        <div style={{ width: '100%', background: '#efefef' }}>
            <div style={{ margin: '0 auto', width: '1270px' }}>
                <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                    <WrapperNavbar span={4} >
                        <NavbarComponent />
                    </WrapperNavbar>
                    <Col span={20}>
                        <WrapperProducts span={20} onClick={handleNavigateDetail} style={{cursor: 'pointer'}}  >
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </WrapperProducts>
                        <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TypeProductPage