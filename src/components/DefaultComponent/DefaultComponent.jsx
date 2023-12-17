import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import Footer from '../FooterComponents/FooterComponent'
import { WrapperFooter } from './style';

const DefaultComponent = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderComponent />
      <div style={{ flex: 1 }}>{children}</div>
      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </div>
  );
};

export default DefaultComponent