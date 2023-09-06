import React from "react";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { mainImgState } from "../../recoil/mainImgAtom";

interface mainImageProp {
  defaultImg: string;
}

export default function MainImage({ defaultImg }: mainImageProp) {
  const mainImg = useRecoilValue(mainImgState);

  return <MainImageStyle src={mainImg === "" ? defaultImg : mainImg} />;
}

const MainImageStyle = styled.img`
  width: 366px;
  height: 366px;
  border-radius: 4px;
`;
