import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { mainImgState } from "../../recoil/mainImgAtom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface mainImageProp {
  defaultImg: string;
}

export default function MainImage({ defaultImg }: mainImageProp) {
  const mainImg = useRecoilValue(mainImgState);

  return (
    <>
      {defaultImg !== "" ? (
        <Screen>
          <ImgWrapper>
            <TransformWrapper>
              <TransformComponent>
                <img src={mainImg || defaultImg} alt="확대 가능한 이미지" />
              </TransformComponent>
            </TransformWrapper>
          </ImgWrapper>
        </Screen>
      ) : (
        <Null />
      )}
    </>
  );
}

const Screen = styled.div`
  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 4px;
`;

const ImgWrapper = styled.div`
  transition: transform 0.2s ease;

  aspect-ratio: 1/1;
  div {
    width: 100%;
  }

  img {
    width: 100%;
    object-fit: contain;
    aspect-ratio: 1/1;
  }
`;

const Null = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: #eee;
`;
