/**
 * 바 칵테일 등록, 수정 팝업
 */

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Tag from "../../search/Tag";
import closeButton from "../../../assets/icon/icon_close.svg";
import baseImg from "../../../assets/icon/icon_empty_Image.svg";
import Button from "../../../components/common/button/Button";
import { INPUT_EVENT } from "../../../libs/interface/typeEvent";
import { ManagementCocktailProps } from "../../../libs/interface/interfaceCocktail";
import { cocktailTagOption } from "../../search/options";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import { selectedTagState } from "../../../recoil/SearchAtom";
import { registCocktailListStateAtom } from "../../../recoil/barManageAtom";

export type SelectPopupTagOptions = "입문자용" | "캐주얼드링커용" | "헤비드링커용";

const Popup = ({ ...props }) => {
  const tagList = cocktailTagOption;
  const selectedTag = useRecoilValue(selectedTagState);
  const resetTag = useResetRecoilState(selectedTagState);
  const [registCocktailList, setRegistCocktailList] = useRecoilState(registCocktailListStateAtom);
  // const [cocktailDetail, setCocktailDetail] = useState("");
  // const [cocktailName, setCocktailName] = useState("");
  const [cocktailImg, setCocktailImg] = useState<File>();
  const [previewImg, setPreviewImg] = useState("");
  // const [recoUser, setRecoUser] = useState(0);

  const cocktailDetail = useRef("");
  const cocktailName = useRef("");
  const recoUser = useRef(0);

  useEffect(() => {
    switch (selectedTag) {
      case "입문자용":
        recoUser.current = 0;
        break;
      case "캐주얼드링커용":
        recoUser.current = 1;
        break;
      case "헤비드링커용":
        recoUser.current = 2;
        break;
    }
  }, [selectedTag]);

  const setInputValue = (e: React.ChangeEvent<any>, type: React.MutableRefObject<string>) => {
    type.current = e.target.value;
  };

  const addImage = (e: INPUT_EVENT) => {
    const inputImage = e.target.files;
    if (!inputImage?.length) return false;
    const previewImageUrl = URL.createObjectURL(inputImage![0]);
    setCocktailImg(inputImage[0]);
    setPreviewImg(previewImageUrl);
  };

  const addCocktail = () => {
    if (!cocktailName) {
      console.log("칵테일 이름 미작성");
      return false;
    } else if (!cocktailImg) {
      console.log("칵테일 이미지 미등록");
      return false;
    } else if (!selectedTag) {
      console.log("칵테일 태그 미선택");
      return false;
    } else if (!cocktailDetail) {
      console.log("칵테일 설명 미등록");
      return false;
    }

    const data: ManagementCocktailProps = {
      cocktailDetail: cocktailDetail.current,
      cocktailName: cocktailName.current,
      cocktailPicture: cocktailImg,
      cocktailPreview: previewImg,
      recoUser: recoUser.current,
      cocktailShowList: false,
    };

    props.registCocktailRef.current = [...registCocktailList, data];
    setRegistCocktailList([...registCocktailList, data]);

    return true;
  };

  return (
    <PopupCover>
      <PopupBg>
        <PopupHeader>
          <h2>칵테일 정보</h2>
          <button
            onClick={() => {
              resetTag();
              props.setIsShowPopup(false);
            }}
          >
            <img src={closeButton} alt="팝업 닫기" />
          </button>
        </PopupHeader>
        <PopupMain>
          <div>
            <ImageSection>
              <label htmlFor="cocktail_img_input">
                <img
                  className={!previewImg ? "empty-img" : ""}
                  src={previewImg ? previewImg : baseImg}
                  alt="칵테일 이미지"
                />
              </label>
              <input
                id="cocktail_img_input"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={addImage}
              />
            </ImageSection>
            <TagSection>
              <span>어떤 고객을 위한 칵테일인가요?</span>
              <Tag itemlist={tagList} typevariants={"secondary"} />{" "}
            </TagSection>
          </div>
          <InputSection>
            <input
              type="text"
              placeholder="칵테일의 이름을 입력해주세요."
              onChange={(e) => setInputValue(e, cocktailName)}
            />
            <textarea
              name="description"
              id="cocktail_description"
              placeholder="해당 칵테일 메뉴에 대한 설명을 적어주세요. (최대 30자)"
              onChange={(e) => setInputValue(e, cocktailDetail)}
            ></textarea>
            <span>Ex. 새콤한 맛을 좋아하던 헤밍웨이가 즐겨 마신 칵테일</span>
          </InputSection>
          <ButtonSection>
            <Button
              typevariants={"fill"}
              sizevariants={"small"}
              value={"등록하기"}
              disabled={false}
              onClick={() => {
                resetTag();
                const result = addCocktail();
                result && props.setIsShowPopup(false);
              }}
            />
          </ButtonSection>
        </PopupMain>
      </PopupBg>
    </PopupCover>
  );
};

export default Popup;

const PopupCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const PopupBg = styled.section`
  width: 100%;
  max-width: 350px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 8px;
`;

const PopupHeader = styled.header`
  position: relative;
  margin: 20px 0;
  width: 100%;
  text-align: left;

  & > h2 {
    display: inline-block;
    width: 70%;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 900;
  }

  & > button {
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
  }
`;

const PopupMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
  }
`;

const ImageSection = styled.section`
  width: 130px;
  height: 130px;
  border: 1px solid var(--gray200-color);
  border-radius: 6px;
  overflow: hidden;
  text-align: center;

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & img.empty-img {
    width: 30px;
    object-fit: contain;
  }
`;

const TagSection = styled.section`
  position: absolute;
  left: 150px;

  & li {
    margin-bottom: 5px;
  }

  & > span {
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--gray400-color);
  }
`;

const InputSection = styled.section`
  position: relative;
  width: 100%;
  margin: 20px 0;
  box-sizing: border-box;

  & > input,
  & > textarea {
    width: 100%;
    border: 1px solid var(--gray200-color);
    box-sizing: border-box;
  }

  & > input {
    height: 40px;
    margin-bottom: 10px;
    padding: 0 10px;
    border: 1px solid var(--gray200-color);
    font-size: 14px;
    font-weight: 600;
  }

  & > textarea {
    height: 100px;
    padding: 10px 10px;
    font-size: 12px;
    font-weight: 300;
    font-family: var(--Font-main);
    resize: none;

    &:focus {
      outline: none;
    }

    &::placeholder,
    & + span {
      font-size: 12px;
      font-weight: bold;
      color: var(--gray400-color);
    }

    & + span {
      position: absolute;
      top: 85px;
      left: 10px;
      display: block;
      color: var(--gray200-color);
    }

    &:not(:placeholder-shown) + span {
      display: none;
    }
  }
`;

const ButtonSection = styled.section`
  width: 100%;
  margin-bottom: 20px;

  & > button {
    width: 100%;
  }
`;
