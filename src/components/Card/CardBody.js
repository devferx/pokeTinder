import React from "react";
import PropTypes from "prop-types";

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

const CardBody = ({ place, distance, skills, desc, open }) => (
  <StyledCardBody open={open}>
    <CardBodyContainer>
      <CardBodyTitle>Pikachu</CardBodyTitle>
      <CardInfo color="black" icon="Region" text={place} />
      <CardInfo
        color="black"
        icon="Global"
        text={`${distance} kilómetros de distancia`}
      />
      <div>
        {skills.map((skill, i) => (
          <Skill key={skill} active={i === 0}>
            {skill}
          </Skill>
        ))}
      </div>
    </CardBodyContainer>
    <Divider />
    <CardBodyContainer>
      <StyledBody color="grey">{desc}</StyledBody>
    </CardBodyContainer>
    <Divider />
    <BlankBox />
  </StyledCardBody>
);

CardBody.propTypes = {
  desc: PropTypes.string,
  open: PropTypes.bool,
  skills: PropTypes.arrayOf(PropTypes.string),
  place: PropTypes.string,
  distance: PropTypes.number,
};

export default CardBody;
