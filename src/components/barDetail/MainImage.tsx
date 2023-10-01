import React from "react";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { mainImgState } from "../../recoil/mainImgAtom";

interface mainImageProp {
  defaultImg: string;
}

export default function MainImage({ defaultImg }: mainImageProp) {
  const mainImg = useRecoilValue(mainImgState);
  return <>{defaultImg !== "" ? <MainImageStyle src={mainImg || defaultImg} /> : <Null />}</>;
}

const MainImageStyle = styled.img`
  width: 100%;
  border-radius: 4px;
  /* 추후 박스 사이즈에 안맞는 이미지가 들어오면 contain이 적절할듯한 */
  /* 확대 축소 기능이 있으니깐 */
  object-fit: contain;
  aspect-ratio: 1/1;
`;

const Null = styled(MainImageStyle)`
  background-color: #eee;
`;
