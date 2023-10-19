import React, { useState } from "react";
import sampleImg from "../../../assets/admin_sample_img.svg";
import styled from "styled-components";
import { StyledH3 } from "./ManageInfo";
import { INPUT_EVENT } from "../../../libs/interface/typeEvent";

const RegistBarImageList = ({ ...props }) => {
  const [previewImageList, setPreviewImageList] = useState<string[]>([]);

  // 바 사진
  const handleBarPics = (e: INPUT_EVENT) => {
    const selectedImage = e.target.files!;

    // 미리보기 생성
    const selectPreviewImages = [...previewImageList];

    for (let i = 0; i < selectedImage.length; i++) {
      let selectImageUrl = URL.createObjectURL(selectedImage[i]);
      selectPreviewImages.push(selectImageUrl);
    }

    props.barPicsRef.current = [...props.barPicsRef.current, ...Array.from(selectedImage)].slice(0, 4);
    setPreviewImageList(selectPreviewImages.slice(0, 4));
  };

  // 바 미리보기 삭제
  const deletePreviewImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const deleteItemIdx = parseInt(e.currentTarget.value);
    props.barPicsRef.current = props.barPicsRef.current.filter((_: File, idx: number) => idx !== deleteItemIdx);
    setPreviewImageList(previewImageList.filter((_, idx) => idx !== deleteItemIdx));
  };

  return (
    <>
      <StyledH3>공간 사진</StyledH3>
      <StyledP>
        {`1) 공간 외부 2) 내부 전경 3) 좌석 배치
              4) 칵테일 메뉴가 적힌 메뉴판 사진을 업로드 해주세요
            `}
        <span>{"(가로 세로 비율 1:1 권장)"}</span>
      </StyledP>
      <PhotoList>
        {previewImageList.map((item, idx) => {
          return (
            <li key={`barImage_${idx}`}>
              <button type="button" value={idx} onClick={deletePreviewImage}>
                <svg width={10} height={10}>
                  <line x1={1} y1={4.5} x2={9} y2={4.5} style={{ stroke: "black", strokeWidth: "2" }} />
                </svg>
              </button>
              <img src={item} alt={`${idx + 1}번째 바 이미지`} />
            </li>
          );
        })}
        {previewImageList.length < 4 && (
          <li key="item_1">
            <input
              type="file"
              onChange={handleBarPics}
              accept="image/*"
              id="image_1"
              multiple
              style={{ display: "none" }}
            />
            <label htmlFor="image_1">
              <img src={sampleImg} alt="" />
            </label>
          </li>
        )}
      </PhotoList>
    </>
  );
};

export default RegistBarImageList;

const StyledP = styled.p`
  margin: 10px 0;
  font-family: var(--font--Medium);
  font-size: 0.8125rem;
  line-height: 1rem;
  color: var(--gray400-color);
  white-space: pre-line;

  & > span {
    color: var(--gray300-color);
  }
`;

const PhotoList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 20px 0;

  & li {
    position: relative;
    width: 70px;
    height: 70px;
    border: 1px solid var(--gray200-color);
    border-radius: 6px;
    overflow: hidden;
  }

  & li > button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    text-align: center;
    cursor: pointer;

    & > img {
      width: 8px;
    }
  }

  & label {
    display: block;
    width: 70px;
    height: 70px;
    object-fit: contain;
    cursor: pointer;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
