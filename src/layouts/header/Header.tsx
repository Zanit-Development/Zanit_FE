import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Logo from "../../assets/logo.svg";

export const Header: React.FC = () => {
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
