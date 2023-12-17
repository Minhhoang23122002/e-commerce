import React from 'react'
import { WrapperItemOrder, WrapperListOrder, WrapperFooterItem, WrapperContainer, WrapperStatus } from './style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const MyOrderPage = () => {

  return (
    <WrapperContainer>
      <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
        <h4>Lịch sử mua hàng</h4>
        <WrapperListOrder>
          <WrapperItemOrder >
            <WrapperStatus>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Trạng thái</span>
              <div>
                <span style={{ color: 'rgb(255, 66, 78)' }}>Giao hàng: </span>
                <span style={{ color: 'rgb(90, 32, 193)', fontWeight: 'bold' }}></span>
              </div>
              <div>
                <span style={{ color: 'rgb(255, 66, 78)' }}>Thanh toán: </span>
                <span style={{ color: 'rgb(90, 32, 193)', fontWeight: 'bold' }}></span>
              </div>
            </WrapperStatus>
            <WrapperFooterItem>
              <div>
                <span style={{ color: 'rgb(255, 66, 78)' }}>Tổng tiền: </span>
                <span
                  style={{ fontSize: '13px', color: 'rgb(56, 56, 61)', fontWeight: 700 }}
                ></span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <ButtonComponent
                  size={40}
                  styleButton={{
                    height: '36px',
                    border: '1px solid #9255FD',
                    borderRadius: '4px'
                  }}
                  textButton={'Hủy đơn hàng'}
                  styleTextButton={{ color: '#9255FD', fontSize: '14px' }}
                >
                </ButtonComponent>
                <ButtonComponent
                  size={40}
                  styleButton={{
                    height: '36px',
                    border: '1px solid #9255FD',
                    borderRadius: '4px'
                  }}
                  textButton={'Xem chi tiết'}
                  styleTextButton={{ color: '#9255FD', fontSize: '14px' }}
                >
                </ButtonComponent>
              </div>
            </WrapperFooterItem>
          </WrapperItemOrder>
        </WrapperListOrder>
      </div>
    </WrapperContainer>
  )
}

export default MyOrderPage