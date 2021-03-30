import React from "react";
import { StyledLoader } from "./styles";

import profileImg from "@img/profile.png";

const CircleLoading = () => {
  return (
    <StyledLoader>
      <img src={profileImg} />
      <div className="ball"></div>
    </StyledLoader>
  );
};

export default CircleLoading;
