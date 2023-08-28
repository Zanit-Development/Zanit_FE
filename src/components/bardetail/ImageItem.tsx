import React from "react";
import { styled } from "styled-components";
import empty from "../../assets/icon/icon_empty_Image.svg";
import { MOUSE_EVENT } from "../../libs/interface/typeEvent";

interface ImageItemProps {
  image: string | undefined;
  handleImg?: (event: MOUSE_EVENT) => void;
}

const ImageItem = ({ image, handleImg }: ImageItemProps) => {
  return (
    <ImgBtn img={image} onClick={handleImg}>
      {image ? <Image src={image} alt="" /> : <Empty src={empty} alt="" />}
    </ImgBtn>
  );
};

const ImgBtn = styled.button<{ img: string | undefined }>`
  width: 88px;
  height: 88px;
  border-radius: 4px;
  border: 1px solid #eee;
  box-sizing: border-box;
  overflow: hidden;
  cursor: ${(props) => (props.img ? "pointer" : "initial")};
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Empty = styled.img`
  width: 20px;
  height: 20px;
`;

export default ImageItem;

// "img1 img2 img3"
// ['img1','img2','img3']
