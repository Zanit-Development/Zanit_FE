import React from "react";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { mainImgState } from "../../recoil/mainImgAtom";

interface mainImageProp {
  defaultImg: string;
}

export default function MainImage({ defaultImg }: mainImageProp) {
  const mainImg = useRecoilValue(mainImgState);

  return (
    <div>
      <MainImageStyle src={mainImg === "" ? defaultImg : mainImg} />
    </div>
  );
}

const MainImageStyle = styled.img`
  width: 100%;
  border-radius: 4px;
`;
