import React from "react";

import Routes from "./components/Routes";

import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  display: grid;
  grid-template-columns: 290px minmax(min-content, 580px);
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Routes />
    </AppWrapper>
  );
}

export default App;
