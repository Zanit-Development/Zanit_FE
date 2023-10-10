import React, { useEffect, useState } from "react";
import Input from "../../../components/common/input/Input";
import Button from "../../../components/common/button/Button";
import SelectBox from "../../../components/common/selectBox/SelectBox";
import sampleImg from "../../../assets/admin_sample_img.svg";
import addCocktailImg from "../../../assets/icon/icon_add_cocktail_button.svg";
import Popup from "./Popup";
import { styled } from "styled-components";
import { handleChangeInput, handleChangeInputNumber } from "./handler";
import { BAR_INFO, ButtonOptions } from "./ManageInfoOptions";
import { CocktailItem } from "../../../components/admin/management/CocktailItem";
import { ManagementCocktailProps } from "../../../libs/interface/interfaceCocktail";
import { FORM_EVENT, INPUT_EVENT } from "../../../libs/interface/typeEvent";

export const ManageInfo = () => {
  // 바 정보
  const [barName, setBarName] = useState("");
  const [barLocation, setBarLocation] = useState("");
  const [barLocationDetail, setBarLocationDetail] = useState("");
  const [barMood, setBarMood] = useState("");
  const [activeCoverCharge, setActiveCoverCharge] = useState("");
  const [coverCharge, setCoverCharge] = useState("");
  const [activeDiscount, setActiveDiscount] = useState("");
  const [discount, setDiscount] = useState("");
  const [barOpeningTime, setBarOpeningTime] = useState("");
  const [barDetail, setBarDetail] = useState("");
  const [isShowPopup, setIsShowPopup] = useState(false); // popup

  // 바 이미지 관련
  const [barPics, setBarPics] = useState<File[]>([]);
  const [previewImageList, setPreviewImageList] = useState<string[]>([]);

  // 칵테일 리스트 관련
  const [cocktailList, setCocktailList] = useState<ManagementCocktailProps[]>([]);
  const [showList, setShowList] = useState<string[]>([]); // 보여줄 칵테일

  useEffect(() => {
    console.log(cocktailList);
  }, [cocktailList]);

  const handleSubmit = (e: FORM_EVENT, inputValues: any[]) => {
    const { ...data } = inputValues;

    console.log(data);
  };

  const handleBarPics = (e: INPUT_EVENT) => {
    const selectImage = e.target.files!;

    // 미리보기 생성
    const selectPreviewImages = [...previewImageList];

    for (let i = 0; i < selectImage.length; i++) {
      let selectImageUrl = URL.createObjectURL(selectImage[i]);
      selectPreviewImages.push(selectImageUrl);
    }

    setBarPics([...Array.from(barPics), ...Array.from(selectImage)].slice(0, 4));
    setPreviewImageList(selectPreviewImages.slice(0, 4));
  };

  const deletePreviewImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const deleteItemIdx = parseInt(e.currentTarget.value);
    setBarPics(barPics.filter((_, idx) => idx !== deleteItemIdx));
    setPreviewImageList(previewImageList.filter((_, idx) => idx !== deleteItemIdx));
  };

  const deleteCocktailList = (deleteItemIdx: number) => {
    const filterCoctailList = cocktailList.filter((_, idx) => deleteItemIdx !== idx);
    setCocktailList(filterCoctailList);
  };

  return (
    <>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          const inputValues = [
            barName,
            barLocation,
            barLocationDetail,
            barMood,
            activeCoverCharge,
            coverCharge,
            activeDiscount,
            discount,
            barOpeningTime,
            barDetail,
            barPics,
            cocktailList,
          ];
          handleSubmit(e, inputValues);
        }}
      >
        <h2 className="a11y-hidden">정보 관리</h2>

        <section>
          {/** idx, name */}
          {/** 0. 바 이름(barName) */}
          <StyledSectionBarInfo>
            <StyledH3>이름</StyledH3>
            <Input
              {...BAR_INFO.NAME}
              value={barName.replaceAll(" ", "")}
              onChange={(e) => handleChangeInput(e, setBarName)}
            />
          </StyledSectionBarInfo>
          {/** 1, 2. 바 위치, 상세주소(barLocation, barLocationDetail) */}
          <StyledSectionBarInfo>
            <StyledH3>위치</StyledH3>
            <SelectBox
              styletype="secondary"
              selected={barLocation}
              setSelected={function (value: React.SetStateAction<string>): void {
                setBarLocation(value);
              }}
              data={["#중랑구 ", "#서대문구 ", "#중구 "]}
              placeholder={"선택"}
              nulltext={"선택"}
            ></SelectBox>
            <Input
              {...BAR_INFO.LOCATION}
              value={barLocationDetail}
              onChange={(e) => setBarLocationDetail(e.target.value)}
            />
          </StyledSectionBarInfo>
          {/** 3. 바 분위기(barMood) */}
          <StyledSectionBarInfo>
            <StyledH3>분위기</StyledH3>
            <SelectBox
              styletype="secondary"
              selected={barMood}
              setSelected={function (value: React.SetStateAction<string>): void {
                setBarMood(value);
              }}
              data={["#캐주얼한", "#고급스러운", "#신나는"]}
              placeholder={"선택"}
              nulltext={"선택"}
            ></SelectBox>
          </StyledSectionBarInfo>
          {/** 4, 5. 커버차지(activeCoverCharge, coverCharge) */}
          <StyledSectionBarInfo>
            <StyledH3>커버차지</StyledH3>
            <SelectBox
              styletype="secondary"
              selected={activeCoverCharge}
              setSelected={function (value: React.SetStateAction<string>): void {
                setActiveCoverCharge(value);
              }}
              data={["있음", "없음"]}
              placeholder={"선택"}
              nulltext={"선택"}
            ></SelectBox>
            <Input
              {...BAR_INFO.COVER_CHARGE}
              value={coverCharge}
              onChange={(e) => handleChangeInputNumber(e, setCoverCharge)}
            />
          </StyledSectionBarInfo>
          {/** 6, 7. 커버차지 할인(activeDicount, discount) */}
          <StyledSectionBarInfo>
            <StyledH3>커버차지</StyledH3>
            <SelectBox
              styletype="secondary"
              selected={activeDiscount}
              setSelected={function (value: React.SetStateAction<string>): void {
                setActiveDiscount(value);
              }}
              data={["있음", "없음"]}
              placeholder={"선택"}
              nulltext={"선택"}
            ></SelectBox>
            <Input {...BAR_INFO.DISCOUNT} value={discount} onChange={(e) => handleChangeInputNumber(e, setDiscount)} />
          </StyledSectionBarInfo>
        </section>
        <section>
          {/** 8. 바 운영시간(barOpeningTime) */}
          <StyledH3>쟈닛 쿠폰 사용가능 요일 및 시간</StyledH3>
          <StyledSectionsBarDesc>
            <StyledTextarea
              value={barOpeningTime}
              onChange={(e) => setBarOpeningTime(e.target.value)}
              placeholder="쟈닛 고객님들께서 Bar에 방문하여 쿠폰을 사용할 수 있는 
요일과 시간을 입력해주세요"
            ></StyledTextarea>
            <StyledSpan>
              {`Ex. 월-금 17:00-24:00
            토-일 15:00-24:00
          `}
            </StyledSpan>
          </StyledSectionsBarDesc>
          {/** 9. 바 설명(barDetail) */}
          <StyledSectionsBarDesc>
            <StyledH3>공간 설명</StyledH3>
            <StyledTextarea
              value={barDetail}
              onChange={(e) => setBarDetail(e.target.value)}
              placeholder="우리 매장에 대한 설명을 적어주세요. (최대 50자)"
            ></StyledTextarea>
            <StyledSpan>
              {`Ex. 따뜻하지만 세련된 분위기를 가진 장소입니다. 전통주 베이스의 칵테일 50여종이 준비되어 있어요. 휴식이 필요한 주말 오후, 방문해보시는 건 어떨까요?  
          `}
            </StyledSpan>
          </StyledSectionsBarDesc>
          {/** 10. 바 사진(barPics) */}
          <StyledSectionsBarDesc>
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
          </StyledSectionsBarDesc>
        </section>
        <section>
          <StyledH3>칵테일 등록 &#40;최대 5잔&#41;</StyledH3>
          <CocktailList>
            {cocktailList.map((item, idx) => {
              return (
                <CocktailItem
                  key={`key_${idx}`}
                  id={`cocktail_${idx}`}
                  info={item}
                  setShowList={setShowList}
                  deleteCocktailList={() => deleteCocktailList(idx)}
                />
              );
            })}
          </CocktailList>
          <AddCocktailButton type="button" onClick={() => setIsShowPopup(true)}>
            <img src={addCocktailImg} alt="" />
          </AddCocktailButton>
        </section>

        <Button {...ButtonOptions} onClick={() => {}}></Button>
      </StyledForm>
      {isShowPopup && (
        <Popup setIsShowPopup={setIsShowPopup} cocktailList={cocktailList} setCocktailList={setCocktailList} />
      )}
    </>
  );
};

const StyledForm = styled.form`
  & > button {
    margin-top: 50px;
  }
`;

const StyledH3 = styled.h3`
  min-width: 60px;
  font-family: var(--font--Bold);
  font-size: 0.875rem;
  text-align: left;
  letter-spacing: 0px;
`;

const StyledSectionBarInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  & > input {
    flex-basis: 100%;
    font-family: var(--font--Medium);
    letter-spacing: -0.5px;
  }

  &:nth-of-type(2) > div {
    flex-basis: 96px;
    flex-shrink: 0;
  }
  &:nth-of-type(3) > div {
    flex-grow: 1;
  }
  &:nth-of-type(4),
  &:nth-of-type(5) {
    & > div {
      flex-basis: 77px;
      flex-shrink: 0;
    }
  }

  &:nth-of-type(5) {
    ${StyledH3} {
      position: relative;
      top: -10px;

      &::before {
        content: "할";
        position: absolute;
        top: 15px;
        left: 0;
      }

      &::after {
        content: "인";
        position: absolute;
        top: 15px;
        right: 15px;
      }
    }

    & > input {
      font-size: 0.75rem;
    }
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 75px;
  left: 10px;
  font-family: var(--font--Medium);
  font-size: 0.8125rem;
  color: var(--gray300-color);
  white-space: pre-line;
  padding-right: 10px;
`;

const StyledSectionsBarDesc = styled.section`
  position: relative;
`;

const StyledTextarea = styled.textarea`
  position: relative;
  width: 100%;
  height: 120px;
  margin: 20px 0 30px;
  padding: 10px;
  border: 1px solid var(--gray200-color);
  border-radius: 6px;
  box-sizing: border-box;
  resize: none;
  font-size: 0.8125rem;
  letter-spacing: -0.7px;

  &:hover,
  &:focus {
    outline: 1px solid var(--main-color);
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background-color: var(--gray200-color);
  }

  &:not(:placeholder-shown) + span {
    display: none;
  }
`;

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
    object-fit: cover;
  }
`;

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
