import React, { useRef, useState } from "react";
import styled from "styled-components";
import addCocktailImg from "../../../assets/icon/icon_add_cocktail_button.svg";
import Popup from "./Popup";
import { CocktailItem } from "../../../components/admin/management/CocktailItem";
import { useRecoilState } from "recoil";
import { registCocktailListStateAtom } from "../../../recoil/barManageAtom";

const RegistCocktailList = ({ ...props }) => {
  const [registCocktailList, setRegistCocktailList] = useRecoilState(registCocktailListStateAtom);
  const [isShowPopup, setIsShowPopup] = useState(false); // show popup
  const [popupState, setPopupState] = useState(false); // true : 신규, false : 수정
  const [selectIdx, setSelectIdx] = useState<number>(0);
  const showCocktailListCount = useRef(0);

  // 칵테일삭제
  const deleteCocktailList = (deleteItemIdx: number) => {
    const filterCoctailList = registCocktailList.filter((_, idx) => deleteItemIdx !== idx);
    setRegistCocktailList(filterCoctailList);
    props.registCocktailRef.current = filterCoctailList;
    // const filterCoctailList = cocktailList.current.filter((_, idx) => deleteItemIdx !== idx);
    // cocktailList.current = filterCoctailList;
  };

  return (
    <>
      <CocktailList>
        {registCocktailList.map((item, idx) => {
          return (
            <CocktailItem
              key={`key_${idx}`}
              id={`cocktail_${idx}`}
              info={item}
              showCocktailListCount={showCocktailListCount}
              deleteCocktailList={() => deleteCocktailList(idx)}
              setPopupState={setPopupState}
              setIsShowPopup={setIsShowPopup}
              setSelectIdx={setSelectIdx}
            />
          );
        })}
      </CocktailList>
      <AddCocktailButton
        type="button"
        onClick={() => {
          setPopupState(true);
          setIsShowPopup(true);
        }}
      >
        <img src={addCocktailImg} alt="" />
      </AddCocktailButton>
      {isShowPopup && (
        // <Popup setIsShowPopup={setIsShowPopup} cocktailList={cocktailList} setCocktailList={setCocktailList} />
        <Popup
          setIsShowPopup={setIsShowPopup}
          registCocktailRef={props.registCocktailRef}
          popupState={popupState}
          selectIdx={selectIdx}
        />
      )}
    </>
  );
};

export default RegistCocktailList;

const CocktailList = styled.ul`
  margin: 20px 0;

  & li {
    width: 100%;
    margin-bottom: 15px;
    padding: 8px 10px;
    background-color: var(--gray100-color);
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;

    & > button {
      width: 15px;
      height: 15px;
      cursor: pointer;

      &:first-of-type {
        float: left;
      }

      &:last-of-type {
        float: right;
      }
    }

    & > div {
      margin: 29px 20px 12px;
    }
  }
`;

const AddCocktailButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: white;
  border: 1px solid var(--gray200-color);
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;
