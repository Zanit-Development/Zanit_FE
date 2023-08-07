import React from "react";
import subtract from "../../../assets/icon/icon_subtract.svg";

export const Alert = ({ content }: { content: string }) => {
  return (
    <article>
      <img src={subtract} alt="alert" />
      <p>{content}</p>
    </article>
  );
};
