import React from "react";
import { StyledActionContainer, ActionButton } from "./styles";

import reloadDisabled from "../../assets/svg/reload-disabled.svg";
import closeDisabled from "../../assets/svg/close-disabled.svg";
import starDisabled from "../../assets/svg/star-disabled.svg";
import favoriteDisabled from "../../assets/svg/favorite-disabled.svg";
import energyDisabled from "../../assets/svg/energy-disabled.svg";

const ActionsButtons = () => {
  return (
    <StyledActionContainer>
      <ActionButton small>
        <img src={reloadDisabled} alt="Reload" />
      </ActionButton>
      <ActionButton>
        <img src={closeDisabled} alt="Close" />
      </ActionButton>
      <ActionButton small>
        <img src={starDisabled} alt="Close" />
      </ActionButton>
      <ActionButton>
        <img src={favoriteDisabled} alt="Close" />
      </ActionButton>
      <ActionButton small>
        <img src={energyDisabled} alt="Close" />
      </ActionButton>
    </StyledActionContainer>
  );
};

export default ActionsButtons;
