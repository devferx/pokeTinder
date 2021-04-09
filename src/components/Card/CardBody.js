import React from "react";

import { StyledBody } from "@components/shared-components";
import CardInfo from "./CardInfo";

import {
  StyledCardBody,
  CardBodyContainer,
  CardBodyTitle,
  Divider,
  Skill,
  BlankBox,
} from "./styles";

const CardBody = ({ open }) => {
  return (
    <StyledCardBody open={open}>
      <CardBodyContainer>
        <CardBodyTitle>Pikachu</CardBodyTitle>
        <CardInfo color="black" icon="Region" text="Region de kanto" />
        <CardInfo
          color="black"
          icon="Global"
          text="8 kilómetros de distancia"
        />
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
