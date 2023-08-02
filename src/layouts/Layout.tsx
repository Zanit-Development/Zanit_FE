import React, { useState } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { styled } from "styled-components";
import { Menu } from "../libs/interface/navMenu";
import { Home } from "../pages/Home";
import Nav from "./nav/Nav";

type WrapperProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<WrapperProps> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<Menu>("home");

  const handleMenuClick = (menu: Menu) => {
    setActiveMenu(menu);
  };

  const renderMainComponent = () => {
    switch (activeMenu) {
      case "home":
        return <Home />;
      // case "bar 검색":
      //   return < />;
      // case "구독하기":
      //   return < />;
      // case "회원가입":
      //   return < />;
      // case "로그인":
      //   return < />;
      default:
        return <Home />;
    }
  };

  return (
    <LayoutWrap>
      <Header />
      <Nav activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      <main>{children}</main>
      <Footer />
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  max-width: 390px;
  margin: 0 auto;
  background-color: #fff;
`;
