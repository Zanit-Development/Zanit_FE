import React, { useState } from "react";
import SearchTag from "../../../components/tag/SearchTag";
import styled from "styled-components";
import closeButton from "../../../assets/icon/icon_close.svg";
import baseImg from "../../../assets/icon/icon_empty_Image.svg";
import Button from "../../../components/common/button/Button";
import { BUTTON_EVENT } from "../../../libs/interface/typeEvent";
import { CocktailProps } from "../../../libs/interface/interfaceCocktail";

const Popup = ({ ...props }) => {
  const [tag, setTag] = useState("");
  const [cocktailImg, setCocktailImg] = useState("");

  const addCocktail = (newItem: CocktailProps) => {
    props.setCoctailList([...props.cocktailList, newItem]);
  };

  const tagOption = [
    [0, "입문자용"],
    [1, "캐주얼드링커용"],
    [2, "헤비드링커용"],
  ] as [number, string][];

  return (
    <PopupCover>
      <PopupBg>
        <PopupHeader>
          <h2>칵테일 정보</h2>
          <button onClick={() => props.setIsShowPopup(false)}>
            <img src={closeButton} alt="팝업 닫기" />
          </button>
        </PopupHeader>
        <PopupMain>
          <div>
            <ImageSection>
              <label htmlFor="cocktail_img_input">
                <img className={!cocktailImg ? "empty-img" : ""} src={cocktailImg ? cocktailImg : baseImg} alt="" />
              </label>
              <input id="cocktail_img_input" type="file" style={{ display: "none" }} />
            </ImageSection>
            <TagSection>
              <span>어떤 고객을 위한 칵테일인가요?</span>
              <SearchTag itemlist={tagOption} typevariants={"tertiary"} settag={setTag} />{" "}
            </TagSection>
          </div>
          <InputSection>
            <input type="text" placeholder="칵테일의 이름을 입력해주세요." />
            <textarea
              name="description"
              id="cocktail_description"
              placeholder="해당 칵테일 메뉴에 대한 설명을 적어주세요. (최대 30자)"
            ></textarea>
            <span>Ex. 새콤한 맛을 좋아하던 헤밍웨이가 즐겨 마신 칵테일</span>
          </InputSection>
          <ButtonSection>
            <Button
              typevariants={"fill"}
              sizevariants={"small"}
              value={"등록하기"}
              disabled={false}
              onClick={function (e: BUTTON_EVENT): void {
                props.setIsShowPopup(false);
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
  max-width: 370px;
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
  }

  & img.empty-img {
    width: 30px;
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
    font-size: 14px;
    font-weight: 300;
    font-family: var(--Font-main);
    resize: none;

    &:focus {
      outline: none;
    }

    &::placeholder,
    & + span {
      font-size: 13px;
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
