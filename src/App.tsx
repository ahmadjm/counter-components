import React from "react";
import "antd/dist/antd.css";
import { AppContainer } from "./AppStyled";
import { ConfigProvider } from "antd";
import { Counters } from "./components/counters";

function App() {
  return (
      <AppContainer>
          <ConfigProvider  >
            <Counters />
          </ConfigProvider>
      </AppContainer>
  );
}

export default App;
