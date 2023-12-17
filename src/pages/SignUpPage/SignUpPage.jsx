import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { actCreateNewUser } from '../../redux/slices/userSlice'

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }
  const handleOnChangePhoneNumber = (value) => {
    setPhoneNumber(value)
  }
  const handleNavigateSignin = () => {
    navigate('/sign-in');
  }
  const handleSignUp = () => {
    const formValue = {
      email: email,
      password: password,
      phoneNumber: phoneNumber
    }
    dispatch(actCreateNewUser({ formValue, navigate }));
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'grey', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', backgroundColor: 'white', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          <InputForm placeholder="password" style={{ marginBottom: '10px' }} value={password} onChange={handleOnchangePassword} />
          <InputForm placeholder="phoneNumber" value={phoneNumber} onChange={handleOnChangePhoneNumber} />
          <ButtonComponent
            disabled={!email.length || !password.length || !phoneNumber.length}
            onClick={handleSignUp}
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng Ký'}
            styleTextButton={{ color: 'white', fontSize: '15px', fontWeight: '700' }}>
          </ButtonComponent>
          <p>Bạn đã có tài khoản ? <WrapperTextLight onClick={handleNavigateSignin}>Đăng Nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
          <h4>Mua đồ tại Hoangshope</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage