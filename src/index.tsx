import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    // <React.StrictMode>
    <RecoilRoot>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </RecoilRoot>
    // </React.StrictMode>
  );
});
