import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Topbar />
      <AppContainerStyled>
        <Sidebar />
        <Home />
      </AppContainerStyled>
    </>
  );
};

const AppContainerStyled = styled.div`
  display: flex;
`;

export default App;
