import React from "react";

import { StyledBody } from "@components/shared-components";
import Icons from "../icons/index";

import {
  CardInfoItem,
  StyledCardBody,
  CardBodyContainer,
  CardBodyTitle,
  IconContainer,
  Divider,
  Skill,
  BlankBox,
} from "./styles";

const CardBody = ({ open }) => {
  return (
    <StyledCardBody open={open}>
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
          todo comer mucho. Cuando entro en confianza me gusta recibir lindos
          abrazos y caricias; al punto que mi amor evoluciona y puede llegar a
          ser muy electrizante. Estoy dispuesto a conocerte y capturar momentos
          muy divertidos juntos.
        </StyledBody>
      </CardBodyContainer>
      <Divider />
      <BlankBox />
    </StyledCardBody>
  );
};

export default CardBody;
