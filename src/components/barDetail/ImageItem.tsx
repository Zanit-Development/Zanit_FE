import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import empty from "../../assets/icon/icon_empty_Image.svg";
import { MOUSE_EVENT } from "../../libs/interface/typeEvent";
import { mainImgState } from "../../recoil/mainImgAtom";

interface ImageItemProps {
  image: string | undefined;
}

const ImageItem = ({ image }: ImageItemProps) => {
  const setMainImg = useSetRecoilState(mainImgState);
  const changeMain = (event: MOUSE_EVENT) => {
    const target = event.target as HTMLImageElement;
    setMainImg(target.src);
  };

  useEffect(() => {
    return () => {
      setMainImg("");
    };
  });

  return (
    <ImgBtn $img={image} onClick={image ? (e) => changeMain(e) : undefined}>
      {image ? <Image src={image} alt="" /> : <Empty src={empty} alt="" />}
    </ImgBtn>
  );
};

const ImgBtn = styled.button<{ $img: string | undefined }>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #eee;
  box-sizing: border-box;
  overflow: hidden;
  cursor: ${(props) => (props.$img ? "pointer" : "initial")};
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
`;

const Empty = styled.img`
  width: 20px;
  height: 20px;
`;

export default ImageItem;

// "img1 img2 img3"
// ['img1','img2','img3']
