/**
 * 바 칵테일 등록, 수정 팝업
 * @TODO 칵테일 수정 시 지금은 등록칵테일로 하고있음
 * @TODO 이 후 서버에 등록된 칵테일 목록에서 직접 불러오도록 수정해야함
 * @ISSUE 현재 수정을 위한 팝업시 이미지 작은 현상 있음
 */

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Tag from "../../search/Tag";
import closeButton from "../../../assets/icon/icon_close.svg";
import baseImg from "../../../assets/icon/icon_empty_Image.svg";
import Button from "../../../components/common/button/Button";
import { INPUT_EVENT } from "../../../libs/interface/typeEvent";
import { cocktailTagOption } from "../../search/options";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import { selectedTagState } from "../../../recoil/SearchAtom";
import { registCocktailImagesStateAtom, registCocktailListStateAtom } from "../../../recoil/barManageAtom";
import { ManagementCocktailProps } from "../../../libs/interface/interfaceCocktail";

export type SelectPopupTagOptions = "입문자용" | "캐주얼드링커용" | "헤비드링커용";

const Popup = ({ ...props }) => {
  const tagList = cocktailTagOption;
  const popupType = props.popupState; // 등록: true, 수정: false
  const selectedTag = useRecoilValue(selectedTagState);
  const resetTag = useResetRecoilState(selectedTagState);
  const [registCocktailList, setRegistCocktailList] = useRecoilState(registCocktailListStateAtom);
  const [registCocktailImages, setRegistCocktailImages] = useRecoilState(registCocktailImagesStateAtom);
  const [cocktailImg, setCocktailImg] = useState<File>();
  const [previewImg, setPreviewImg] = useState("");
  const [updateCocktail, setUpdateCockatil] = useState<ManagementCocktailProps>();

  const cocktailDetail = useRef(!popupType ? updateCocktail?.cocktailDetail! : "");
  const cocktailName = useRef(!popupType ? updateCocktail?.cocktailName! : "");
  const cocktailPrice = useRef(!popupType ? updateCocktail?.cocktailPrice! : "");
  const recoUser = useRef(!popupType ? updateCocktail?.recoUser! : 0);

  console.log(popupType);

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

  useEffect(() => {
    if (!popupType) {
      const target: ManagementCocktailProps = getCocktail(props.selectIdx);
      setUpdateCockatil(target);
      console.log(updateCocktail?.cocktailPreview);
    }
  }, []);

  const setInputValue = (e: React.ChangeEvent<any>, type: React.MutableRefObject<string | number>) => {
    type.current = e.target.value;
  };

  const addImage = (e: INPUT_EVENT) => {
    const inputImage = e.target.files;
    if (!inputImage?.length) return false;

    const previewImageUrl = URL.createObjectURL(inputImage![0]);
    setCocktailImg(inputImage[0]);
    setPreviewImg(previewImageUrl);
  };

  const updateCocktailInfo = () => {};

  const getCocktail = (updateCocktailIndex: number) => {
    const item = registCocktailList.filter((item, idx) => updateCocktailIndex === idx && item);
    return item[0] as ManagementCocktailProps;
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

    // const formData = new FormData();
    // formData.append("cocktailName", cocktailName.current);
    // formData.append("cocktailDetail", cocktailDetail.current);
    // formData.append("recoUser", recoUser.current + "");
    // formData.append("cocktailPic", cocktailImg);
    // formData.append("cocktailPrice", cocktailPrice.current);
    // formData.append("previewImg", previewImg);
    // formData.append("activated", false + "");

    const cocktail: ManagementCocktailProps = {
      cocktailName: cocktailName.current,
      cocktailDetail: cocktailDetail.current,
      recoUser: recoUser.current,
      // cocktailPic: cocktailImg,
      cocktailPrice: parseInt(cocktailPrice.current as string),
      cocktailPreview: previewImg,
      activated: false,
    };

    // props.registCocktailRef.current = [...registCocktailList, data];
    setRegistCocktailList([...registCocktailList, cocktail]);
    setRegistCocktailImages([...registCocktailImages, cocktailImg]);
    // setRegistCocktailList([...registCocktailList, formData]);

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
                  src={!popupType ? updateCocktail?.cocktailPreview : previewImg ? previewImg : baseImg}
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
              defaultValue={!popupType ? updateCocktail?.cocktailName : ""}
            />
            <input
              type="text"
              placeholder="칵테일 정가 금액을 입력해주세요."
              onChange={(e) => setInputValue(e, cocktailPrice)}
              defaultValue={!popupType ? updateCocktail?.cocktailPrice : ""}
            />
            <textarea
              name="description"
              id="cocktail_description"
              placeholder="해당 칵테일 메뉴에 대한 설명을 적어주세요. (최대 30자)"
              onChange={(e) => setInputValue(e, cocktailDetail)}
              defaultValue={!popupType ? updateCocktail?.cocktailDetail : ""}
            ></textarea>
            <span>Ex. 새콤한 맛을 좋아하던 헤밍웨이가 즐겨 마신 칵테일</span>
          </InputSection>
          <ButtonSection>
            <Button
              typevariants={"fill"}
              sizevariants={"small"}
              value={"등록하기"}
              disabled={false}
              onClick={(e) => {
                e.preventDefault();
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
      top: 130px;
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
