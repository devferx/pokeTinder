import React from "react";
import { StyledActionContainer, ActionButton } from "./styles";

import reloadDisabled from "../../assets/svg/reload-disabled.svg";
import closeDisabled from "../../assets/svg/close-disabled.svg";
import starDisabled from "../../assets/svg/star-disabled.svg";
import favoriteDisabled from "../../assets/svg/favorite-disabled.svg";
import energyDisabled from "../../assets/svg/energy-disabled.svg";

import reload from "../../assets/svg/reload.svg";
import close from "../../assets/svg/close.svg";
import star from "../../assets/svg/star.svg";
import favorite from "../../assets/svg/favorite.svg";
import energy from "../../assets/svg/energy.svg";

const Image = ({ src, disabledImg, disabled, ...props }) => (
  <img src={disabled ? disabledImg : src} {...props} />
);

const ActionsButtons = ({ disabled }) => {
  return (
    <StyledActionContainer>
      <ActionButton small>
        <Image
          disabled={disabled}
          src={reload}
          disabledImg={reloadDisabled}
          alt="Reload"
        />
      </ActionButton>
      <ActionButton>
        <Image
          disabled={disabled}
          src={close}
          disabledImg={closeDisabled}
          alt="Close"
        />
      </ActionButton>
      <ActionButton small>
        <Image
          disabled={disabled}
          src={star}
          disabledImg={starDisabled}
          alt="Star"
        />
      </ActionButton>
      <ActionButton>
        <Image
          disabled={disabled}
          src={favorite}
          disabledImg={favoriteDisabled}
          alt="Favorite"
        />
      </ActionButton>
      <ActionButton small>
        <Image
          disabled={disabled}
          src={energy}
          disabledImg={energyDisabled}
          alt="Energy"
        />
      </ActionButton>
    </StyledActionContainer>
  );
};

export default ActionsButtons;
