import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./pages/search/Search";
import SignIn from "./pages/sign/SignIn";
import SignUp from "./pages/sign/SignUp";
import Subscribe from "./pages/subscribe/Subscribe";
import MyCoupon from "./pages/myCoupon/MyCoupon";
import HowToUse from "./pages/myCoupon/HowToUse";
import UseCoupon from "./pages/myCoupon/UseCoupon";
import Bardetail from "./pages/barDetail/Bardetail";
import PasswordFind from "./pages/sign/PasswordFind";
import PasswordReset from "./pages/sign/PasswordReset";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/myCoupon" element={<MyCoupon />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/useCoupon" element={<UseCoupon />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/bar-detail" element={<Bardetail />} />
        <Route path="/password-find" element={<PasswordFind />} />
        <Route path="/password-reset" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
