import React from "react";
import { Layout } from "./layouts/Layout";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <p>hello</p>
      </Layout>
    </div>
  );
}

export default App;
