import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Topbar />
      <AppContainerStyled>
        <Sidebar />
        <div className="others">others</div>
      </AppContainerStyled>
    </>
  );
};

const AppContainerStyled = styled.div`
  display: flex;
  .others {
    flex: 4;
    background: green;
  }
`;

export default App;
