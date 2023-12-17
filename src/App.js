import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import TypeProductPage from "./pages/TypeProductPage/TypeProductPage";
import PaymentPage from "./pages/PaymentPage/Payment";
import ChangePasswordPage from "./pages/ChangePasswordPage/ChangePasswordPage";
import MyOrderPage from "./pages/MyOrderPage/MyOrder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
            <Route
              path={ROUTES.PRODUCT_PAGE}
              element={<ProductPage />}
            />
            <Route
              path={ROUTES.SIGN_IN_PAGE}
              element={<SignInPage showHeader={false} showFooter={false} />}
            />
            <Route
              path={ROUTES.SIGN_UP_PAGE}
              element={<SignUpPage showHeader={false} showFooter={false} />}
            />
            <Route
              path={ROUTES.ORDER_PAGE}
              element={<OrderPage />}
            />
            <Route
              path={ROUTES.TYPE_PRODUCT_PAGE}
              element={<TypeProductPage showHeader={true} showFooter={true} />}
            />
            <Route
              path={ROUTES.PAYMENT_PAGE}
              element={<PaymentPage />}
            />
            <Route
              path={ROUTES.CHANGEPASSWORD_PAGE}
              element={<ChangePasswordPage />}
            />
            <Route
              path={ROUTES.MYORDER_PAGE}
              element={<MyOrderPage />}
            />
            <Route
              path={ROUTES.PROFILE_PAGE}
              element={<ProfilePage showHeader={true} showFooter={true} />}
            />
            <Route
              path={ROUTES.PRODUCT_DETAILS_PAGE}
              element={<ProductDetailsPage showHeader={true} showFooter={true} />}
            />
          </Route>
          <Route path="/" element={<Navigate to={ROUTES.HOME_PAGE} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
