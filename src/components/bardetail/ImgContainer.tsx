import React, { useState } from "react";
import { styled } from "styled-components";
import bar1 from "../../assets/sample-img/bar1.png";
import bar2 from "../../assets/sample-img/bar2.png";
import bar3 from "../../assets/sample-img/bar3.png";
import { MOUSE_EVENT } from "../../libs/interface/typeEvent";

import ImageItem from "./ImageItem";

function returnImgArr(barPics: string) {
  const splitArr = barPics.split(" ");
  return splitArr.concat(new Array(4 - splitArr.length).fill(undefined));
}

const ImgContainer = ({ barPics }: { barPics: string }) => {
  const imgArr: string[] = returnImgArr(`${bar1} ${bar2} ${bar3}`);
  const [mainImg, setMainImg] = useState<string>(imgArr[0]);

  const changeMain = (event: MOUSE_EVENT) => {
    const target = event.target as HTMLImageElement;
    setMainImg(target.src);
  };

  return (
    <Section>
      <MainImage src={mainImg} />
      <ImgList>
        {imgArr.map((img) => (
          <li key={img}>
            <ImageItem image={img} handleImg={img ? changeMain : undefined} />
          </li>
        ))}
      </ImgList>
    </Section>
  );
};

const Section = styled.section`
  margin: 0 12px;
`;

const MainImage = styled.img`
  width: 366px;
  height: 366px;
  border-radius: 4px;
`;

const ImgList = styled.ul`
  margin: 12px 0 20px;
  display: flex;
  gap: 5px;
  li {
    height: 88px;
    display: inline-block;
  }
`;

export default ImgContainer;
