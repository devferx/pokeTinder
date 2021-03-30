import React from "react";
import styled from "@emotion/styled";

import Aside from "../../components/Aside";
import CircleLoading from "../../components/CircleLoading";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <MainContainer>
      <Aside />
      <CenteredContainer>
        <CircleLoading />
      </CenteredContainer>
    </MainContainer>
  );
};

export default Home;
