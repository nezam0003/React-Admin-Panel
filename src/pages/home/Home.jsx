import React from "react";
import styled from "styled-components";
import FeaturedInfo from "../../components/featured/FeaturedInfo";

const Home = () => {
  return (
    <>
      <HomeStyled>
        <FeaturedInfo />
      </HomeStyled>
    </>
  );
};

const HomeStyled = styled.div`
  flex: 4;
  background: var(--clr-grey-10);
`;

export default Home;
