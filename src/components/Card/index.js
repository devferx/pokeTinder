import React, { useState } from "react";

import { StyledBody } from "@components/shared-components";

import pikachu1 from "@img/pikachu1.png";
import pikachu2 from "@img/pikachu2.png";
import pikachu3 from "@img/pikachu3.png";

import Icons from "../icons/index";

import {
  MainCardContainer,
  StyledCard,
  CardImage,
  CardImageCarousel,
  CardHeader,
  CardTitle,
  CardInfoItem,
  CardIcon,
  CardBody,
  CardBodyContainer,
  CardBodyTitle,
  IconContainer,
  Divider,
  Skill,
  BlankBox,
} from "./styles";

const Card = ({ open = true }) => {
  return (
    <MainCardContainer>
      <StyledCard>
        <CardImage>
          <CardImageCarousel>
            <img src={pikachu1} alt="Pikachu" />
            <img src={pikachu2} alt="Pikachu" />
            <img src={pikachu3} alt="Pikachu" />
          </CardImageCarousel>
          <CardHeader open={open}>
            <CardTitle className="title">Pikachu</CardTitle>
            <CardInfoItem>
              <IconContainer>
                <Icons.Region />
              </IconContainer>
              <StyledBody color="white">Region de kanto</StyledBody>
            </CardInfoItem>

            <CardInfoItem>
              <IconContainer>
                <Icons.Global />
              </IconContainer>
              <StyledBody color="white">8 kilómetros de distancia</StyledBody>
            </CardInfoItem>
          </CardHeader>
        </CardImage>

        <CardBody open={open}>
          <CardBodyContainer>
            <CardBodyTitle>Pikachu</CardBodyTitle>
            <CardInfoItem>
              <IconContainer>
                <Icons.Region color="#5C5C5C" />
              </IconContainer>
              <StyledBody color="grey-1">Region de kanto</StyledBody>
            </CardInfoItem>
            <CardInfoItem>
              <IconContainer>
                <Icons.Global color="#5C5C5C" />
              </IconContainer>
              <StyledBody color="grey-1">8 kilómetros de distancia</StyledBody>
            </CardInfoItem>
            <div>
              <Skill active>Tierno</Skill>
              <Skill>Amigable</Skill>
              <Skill>Paciente</Skill>
              <Skill>Leal</Skill>
            </div>
          </CardBodyContainer>
          <Divider />
          <CardBodyContainer>
            <StyledBody color="grey">
              Soy un Pokémon muy afectuoso, me encanta jugar, divertirme y sobre
              todo comer mucho. Cuando entro en confianza me gusta recibir
              lindos abrazos y caricias; al punto que mi amor evoluciona y puede
              llegar a ser muy electrizante. Estoy dispuesto a conocerte y
              capturar momentos muy divertidos juntos.
            </StyledBody>
          </CardBodyContainer>
          <Divider />
          <BlankBox />
        </CardBody>
      </StyledCard>
    </MainCardContainer>
  );
};

export default Card;
