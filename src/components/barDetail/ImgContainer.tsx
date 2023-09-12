import React from "react";
import { styled } from "styled-components";
import bar1 from "../../assets/sample-img/bar1.png";
import bar2 from "../../assets/sample-img/bar2.png";
import bar3 from "../../assets/sample-img/bar3.png";

import ImageItem from "./ImageItem";
import MainImage from "./MainImage";

function returnImgArr(barPics: string) {
  const splitArr = barPics.split(" ");
  return splitArr.concat(new Array(4 - splitArr.length).fill(undefined));
}

const ImgContainer = ({ barPics }: { barPics: string }) => {
  const imgArr: string[] = returnImgArr(`${bar1} ${bar2} ${bar3}`);

  return (
    <Section>
      <MainImage defaultImg={imgArr[0]} />
      <ImgList>
        {imgArr.map((img, index) => (
          <li key={index}>
            <ImageItem image={img} />
          </li>
        ))}
      </ImgList>
    </Section>
  );
};

const Section = styled.section`
  margin: 0 12px;
`;

const ImgList = styled.ul`
  margin: 12px 0 20px;
  display: flex;
  gap: 4px;
  li {
    width: calc((100% - 12px) / 3);
    display: inline-block;
  }
`;

export default ImgContainer;
