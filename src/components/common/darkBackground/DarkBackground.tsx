import { styled } from "styled-components";

import React, { useEffect } from "react";
import { BackgroundType } from "../../../libs/interface/interfaceCommon";

export const DarkBackground = ({ onClose, children }: BackgroundType) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return <BackgroundStyle onClick={onClose}>{children}</BackgroundStyle>;
};

export const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
