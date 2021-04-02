import React from "react";

import { StyledBody } from "@components/shared-components";

import pikachu1 from "@img/pikachu1.png";
import pikachu2 from "@img/pikachu2.png";
import pikachu3 from "@img/pikachu3.png";

import regionIcon from "@svg/region-icon.svg";
import worldIcon from "@svg/world-icon.svg";

import {
  MainCardContainer,
  StyledCard,
  CardImage,
  CardImageCarousel,
  CardHeader,
  CardTitle,
  CardInfoItem,
  CardIcon,
} from "./styles";

const Card = () => {
  return (
    <MainCardContainer>
      <StyledCard>
        <CardImage>
          <CardImageCarousel>
            <img src={pikachu1} alt="Pikachu" />
            <img src={pikachu2} alt="Pikachu" />
            <img src={pikachu3} alt="Pikachu" />
          </CardImageCarousel>
          <CardHeader>
            <CardTitle className="title">Pikachu</CardTitle>
            <CardInfoItem>
              <CardIcon src={regionIcon} />
              <StyledBody color="white">Region de kanto</StyledBody>
            </CardInfoItem>

            <CardInfoItem>
              <CardIcon src={worldIcon} />
              <StyledBody color="white">8 kilómetros de distancia</StyledBody>
            </CardInfoItem>
          </CardHeader>
        </CardImage>
      </StyledCard>
    </MainCardContainer>
  );
};

export default Card;
