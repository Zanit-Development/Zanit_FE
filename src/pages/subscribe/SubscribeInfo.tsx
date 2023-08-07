import React from "react";
import { SubScribeProps } from "../../libs/interface/interfaceSubscribe";

export const SubscribeInfo = ({ title, src, content }: SubScribeProps) => {
  return (
    <>
      <section>
        <h2>{title}</h2>
        <figure>
          <img src={src} alt="icon" />
          <figcaption>{content}</figcaption>
        </figure>
      </section>
    </>
  );
};
