import React from "react";

import Routes from "./components/Routes";
import { CurrentUserProvider } from "./components/CurrentUserContext";

import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(350px, 1fr) minmax(min-content, 2fr);
`;

function App() {
  return (
    <AppWrapper>
      <CurrentUserProvider>
        <Routes />
      </CurrentUserProvider>
    </AppWrapper>
  );
}

export default App;
