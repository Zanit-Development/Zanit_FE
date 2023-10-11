import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <H1>
      <Link to="/">
        <img src={Logo} alt="Zanit" />
      </Link>
    </H1>
  );
};

const H1 = styled.h1`
  padding: 13px;
`;

export default Header;
