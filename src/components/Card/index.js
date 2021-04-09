import React from "react";
import Stories from "react-insta-stories";

import CardBody from "./CardBody";
import CardInfo from "./CardInfo";

import {
  MainCardContainer,
  StyledCard,
  CardImage,
  CardHeader,
  CardTitle,
} from "./styles";

import pikachu1 from "@img/pikachu1.png";
import pikachu2 from "@img/pikachu2.png";
import pikachu3 from "@img/pikachu3.png";

const Card = ({ open = true }) => {
  const pictures = [pikachu1, pikachu2, pikachu3];
  return (
    <MainCardContainer>
      <StyledCard>
        <CardImage>
          <Stories stories={pictures} width={424} height={424} loop />
          <CardHeader>
            <CardTitle className="title">Pikachu</CardTitle>
            <CardInfo icon="Region" text="Region de kanto" />
            <CardInfo icon="Global" text="8 kilómetros de distancia" />
          </CardHeader>
        </CardImage>

        <CardBody open={open} />
      </StyledCard>
    </MainCardContainer>
  );
};

export default Card;
