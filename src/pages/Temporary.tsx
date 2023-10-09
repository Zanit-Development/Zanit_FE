import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Temporary() {
  return (
    <Container>
      <Inner>
        <h3>유저페이지</h3>
        <hr />
        <Link to="/home">홈화면</Link>
        <Link to="/signIn">로그인</Link>
        <Link to="/signUp">회원가입</Link>
        <Link to="/search">검색</Link>
        <Link to="/subscribe">구독하기</Link>
        <Link to="/subscribe/start">구독 시작하기</Link>
        <Link to="/myCoupon">내 쿠폰함</Link>
        <Link to="/use-history">이전 쿠폰 이용 내역</Link>
        <Link to="/stop-subscribe">정기 결제 해지하기</Link>
        <Link to="/how-to-use">ZAN 쿠폰 이용방법</Link>
        <Link to="/useCoupon">쿠폰 사용하기</Link>
        <Link to="/404">404</Link>
        <Link to="/bar-detail?barUid=1">바 상세보기</Link>
        <Link to="/password-find">비밀번호 찾기</Link>
        <Link to="/password-reset">비밀번호 재설정하기</Link>
      </Inner>
      <Inner>
        <h3>admin</h3>
        <hr />
        <Link to="/admin/signIn">관리자 로그인</Link>
        <Link to="/admin/barinfo">관리자 바 정보</Link>
        <Link to="/admin/management">관리자 바 관리하기</Link>
        <Link to="/admin/manageorder">관리자 주문 관리</Link>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  h3 {
    font-size: 24px;
  }
  a {
    display: block;
    margin: 10px;
  }
`;

const Inner = styled.div`
  border: 1px solid black;
  flex-basis: auto;
  flex-grow: 1;
`;
