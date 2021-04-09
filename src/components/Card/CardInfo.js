import React from "react";

import { StyledBody } from "@components/shared-components";
import Icons from "../icons/index";

import { CardInfoItem as StyledCardInfoItem, IconContainer } from "./styles";

const CardInfo = ({ color, icon, text }) => {
  const Icon = Icons[icon];

  return (
    <StyledCardInfoItem>
      <IconContainer>
        <Icon color={color === "black" ? "#5C5C5C" : "#FFF"} />
      </IconContainer>
      <StyledBody color={color === "black" ? "grey-1" : "white"}>
        {text}
      </StyledBody>
    </StyledCardInfoItem>
  );
};

export default CardInfo;
