import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { Home } from "./pages/home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { Search } from "./pages/search/Search";
import { SignIn } from "./pages/sign/SignIn";
import { SignUp } from "./pages/sign/SignUp";
import { Subscribe } from "./pages/subscribe/Subscribe";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
