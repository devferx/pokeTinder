import React from "react";

import Aside from "@components/Aside";
import CircleLoading from "@components/CircleLoading";
import Card from "@components/Card";
import ActionsButtons from "@components/ActionsButtons";
import { MainContainer, StyledContainer } from "./styles";

const Home = () => {
  return (
    <MainContainer>
      <Aside />
      <StyledContainer>
        {/* <CircleLoading /> */}
        <Card />
        <ActionsButtons disabled />
      </StyledContainer>
    </MainContainer>
  );
};

export default Home;
