import React from "react";
import { Layout } from "../../layouts/Layout";
import { Button } from "../../components/common/button/Button";
import { ButtonProps } from "../../libs/interface/interface";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const buttonOptions: ButtonProps = {
    typeVariants: "primary",
    sizeVariants: "large",
    value: "홈으로 가기",
    disabled: false,
    onClick: () => {
      navigate("/");
    },
  };

  return (
    <Layout>
      <SectionWrap>
        <p>404</p>
        <p>페이지를 찾을 수 없습니다</p>
        <Button {...buttonOptions} />
      </SectionWrap>
    </Layout>
  );
};

export default NotFound;

const SectionWrap = styled.section`
  padding: 139px 21px 196px 21px;
  margin: 0 auto;
  text-align: center;

  p:first-child {
    font-size: 3.75rem;
    color: var(--main-color);
    font-weight: 700;
    /* font-family: "Nato-Sans-KR"; */
  }
  p:nth-of-type(2) {
    font-size: 1.125rem;
    color: var(--gray500-color);
    margin: 16px 0 36px;
  }

  button {
    width: 100%;
  }
`;
