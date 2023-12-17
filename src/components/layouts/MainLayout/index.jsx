import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../FooterComponents/FooterComponent";
import HeaderComponent from "../../HeaderComponent/HeaderComponent";
import { WrapperLayout, WrapperLayoutContent } from "./style";

const MainLayout = () => {
  return (
    <WrapperLayout className="main-layout-container">
      <div className="main-layout-container__header">
        <HeaderComponent />
      </div>
      <WrapperLayoutContent className="main-layout-container__content">
        <Outlet />
      </WrapperLayoutContent>
      <div className="main-layout-container__footer">
        <Footer />
      </div>
    </WrapperLayout>
  );
};

export default MainLayout;
