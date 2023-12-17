import React from 'react'
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel, WrapperUploadFile } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Button } from 'antd'
import { UploadOutlined} from '@ant-design/icons'

const ProfilePage = () => {

  return (
    <div style={{ width: '1270px', margin: '0 auto', height: '500px'}}>
        <WrapperHeader>Thông tin người dùng</WrapperHeader>
        <WrapperContentProfile>
            <WrapperInput>
                <WrapperLabel htmlFor="email">Name</WrapperLabel>
                <InputForm style={{ width: '300px'}} id="name" />
                <ButtonComponent
                size={40}
                styleButton={{
                    height: '30px',
                    width: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px'
                  }}
                  textButton={'Cập nhật'}
                  styleTextButton={{ color: 'blue', fontSize: '15px', fontWeight: '700' }}>  
                </ButtonComponent>
            </WrapperInput>
            <WrapperInput>
                <WrapperLabel htmlFor="email">Email</WrapperLabel>
                <InputForm style={{ width: '300px'}} id="email"  />
                <ButtonComponent
                size={40}
                styleButton={{
                    height: '30px',
                    width: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px'
                  }}
                  textButton={'Cập nhật'}
                  styleTextButton={{ color: 'blue', fontSize: '15px', fontWeight: '700' }}>  
                </ButtonComponent>
            </WrapperInput>
            <WrapperInput>
                <WrapperLabel htmlFor="email">Phone</WrapperLabel>
                <InputForm style={{ width: '300px'}} id="phone" />
                <ButtonComponent
                size={40}
                styleButton={{
                    height: '30px',
                    width: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px'
                  }}
                  textButton={'Cập nhật'}
                  styleTextButton={{ color: 'blue', fontSize: '15px', fontWeight: '700' }}>  
                </ButtonComponent>
            </WrapperInput>
            <WrapperInput>
                        <WrapperLabel htmlFor="avatar">Avatar</WrapperLabel>
                        <WrapperUploadFile >
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </WrapperUploadFile>
                        {/* {avatar && (
                            <img src={avatar} style={{
                                height: '60px',
                                width: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }} alt="avatar"/>
                        )} */}
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                borderRadius: '4px',
                                padding: '2px 6px 6px'
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                <WrapperLabel htmlFor="email">Address</WrapperLabel>
                <InputForm style={{ width: '300px'}} id="Address" />
                <ButtonComponent
                size={40}
                styleButton={{
                    height: '30px',
                    width: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px'
                  }}
                  textButton={'Cập nhật'}
                  styleTextButton={{ color: 'blue', fontSize: '15px', fontWeight: '700' }}>  
                </ButtonComponent>
            </WrapperInput>
        </WrapperContentProfile>
    </div>
  )
}

export default ProfilePage