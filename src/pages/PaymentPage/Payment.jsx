import React from 'react'
//import { PayPalButton } from "react-paypal-button-v2";
import { Label, WrapperInfo, WrapperLeft, WrapperRadio, WrapperRight, WrapperTotal } from './style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import InputComponent from '../../components/InputComponent/inputComponent';
import { Form, Radio } from 'antd';

const Payment = () => {
    return (
        <div style={{background: '#f5f5fa', with: '100%'}}>
            <div style={{height: '100%', width: '1270px', margin: '0 auto'}}>
              <h3>Thanh toán</h3>
              <div style={{ display: 'flex', justifyContent: 'center'}}>
                <WrapperLeft>
                  <WrapperInfo>
                    <div>
                      <Label>Chọn phương thức giao hàng</Label>
                      <WrapperRadio > 
                        <Radio  value="nhanh"><span style={{color: '#ea8500', fontWeight: 'bold'}}>FAST</span> Giao hàng nhanh</Radio>
                        <Radio  value="tiet kiem"><span style={{color: '#ea8500', fontWeight: 'bold'}}>Tiết Kiệm</span> Giao hàng tiết kiệm</Radio>
                      </WrapperRadio>
                    </div>
                  </WrapperInfo>
                  <WrapperInfo>
                    <div>
                      <Label>Chọn phương thức thanh toán</Label>
                      <WrapperRadio> 
                        <Radio value="later_money"> Thanh toán tiền mặt khi nhận hàng</Radio>
                        <Radio value="paypal"> Thanh toán tiền bằng paypal</Radio>
                      </WrapperRadio>
                    </div>
                  </WrapperInfo>
                </WrapperLeft>
                <WrapperRight>
                  <div style={{width: '100%'}}>
                    <WrapperInfo>
                      <div>
                        <span>Địa chỉ: </span>
                        <span style={{fontWeight: 'bold'}}> </span>
                        <span style={{color: 'blue', cursor:'pointer'}}>Thay đổi</span>
                      </div>
                    </WrapperInfo>
                    <WrapperInfo>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <span>Tạm tính</span>
                        <span style={{color: 'black', fontSize: '14px', fontWeight: 'bold'}}></span>
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <span>Giảm giá</span>
                        <span style={{color: 'black', fontSize: '14px', fontWeight: 'bold'}}></span>
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <span>Phí giao hàng</span>
                        <span style={{color: 'black', fontSize: '14px', fontWeight: 'bold'}}></span>
                      </div>
                    </WrapperInfo>
                    <WrapperTotal>
                      <span>Tổng tiền</span>
                      <span style={{display:'flex', flexDirection: 'column'}}>
                        <span style={{color: 'rgb(254, 56, 52)', fontSize: '24px', fontWeight: 'bold'}}></span>
                        <span style={{color: '#000', fontSize: '11px'}}>(Đã bao gồm VAT nếu có)</span>
                      </span>
                    </WrapperTotal>
                  </div>
                    {/* <div style={{width: '320px'}}>
                      <PayPalButton/>
                    </div> */}
                    <ButtonComponent
                      size={40}
                      styleButton={{
                          background: 'rgb(255, 57, 69)',
                          height: '48px',
                          width: '270px',
                          border: 'none',
                          borderRadius: '4px'
                      }}
                      textButton={'Đặt hàng'}
                      styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                  ></ButtonComponent>
                </WrapperRight>
              </div>
            </div>
            <div title="Cập nhật thông tin giao hàng">
              <Form
                  name="basic"
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 20 }}
                  autoComplete="on"
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <InputComponent name="name" />
                  </Form.Item>
                  <Form.Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your city!' }]}
                  >
                    <InputComponent name="city" />
                  </Form.Item>
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your  phone!' }]}
                  >
                    <InputComponent name="phone" />
                  </Form.Item>
    
                  <Form.Item
                    label="Adress"
                    name="address"
                    rules={[{ required: true, message: 'Please input your  address!' }]}
                  >
                    <InputComponent name="address" />
                  </Form.Item>
                </Form>
              
            </div>
        </div>
      )
}

export default Payment