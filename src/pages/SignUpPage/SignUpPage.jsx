import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }
  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handleNavigateSignin = () => {
    navigate('/sign-in');
  }
  const handleSignUp = () => {

  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'grey', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', backgroundColor: 'white', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          <InputForm placeholder="password" style={{ marginBottom: '10px' }} value={password} onChange={handleOnchangePassword} />
          <InputForm placeholder="confirm password" value={confirmpassword} onChange={handleOnchangeConfirmPassword} />
          <ButtonComponent
            disabled={!email.length || !password.length || !confirmpassword.length}
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