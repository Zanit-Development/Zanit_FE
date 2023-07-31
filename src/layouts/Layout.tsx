import React, { ReactNode } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
