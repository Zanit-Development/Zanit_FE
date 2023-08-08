import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        <Link to="/">
          <img src={Logo} alt="Zanit" />
        </Link>
      </h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding: 13px;
`;

export default Header;
