import React from "react";
import styled from "@emotion/styled";
import Aside from "../../components/Aside";

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
    </MainContainer>
  );
};

export default Home;
