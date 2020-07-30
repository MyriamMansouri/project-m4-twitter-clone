import React from "react";
import Routes from "./components/Routes";

import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(350px, 1fr) minmax(min-content, 2fr) ;
`;

function App() {
  return (
    <AppWrapper>
      <Routes />
    </AppWrapper>
  );
}

export default App;
