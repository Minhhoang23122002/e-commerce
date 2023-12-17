import { Badge, Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';


const HeaderComponent = () => {
    const navigate = useNavigate(); 

    const handleNavigateLogin = () => {
        navigate('/sign-in'); 
    }

    const handleNavigateHome = () => {
        navigate('/');
    }
    const handleNavigateCarts = () => {
        navigate('/carts')
    }
    return (
        <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center'}}>
            <WrapperHeader >
                <Col span={5}>
                    <WrapperTextHeader onClick={handleNavigateHome} style={{cursor: 'pointer'}}>HoangShope</WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <ButtonInputSearch
                        size="large"
                        textButton="Tìm kiếm"
                        placeholder="input search text" />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '23px', alignItems: 'center' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                            <WrapperTextHeaderSmall>Đăng Nhập/Đăng Ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản </WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: 'white' }} />
                        </Badge>
                        <WrapperTextHeaderSmall onClick={handleNavigateCarts} style={{cursor: 'pointer'}} >Giỏ Hàng </WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent