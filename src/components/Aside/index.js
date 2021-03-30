import React from "react";

import {
  StyledAside,
  Header,
  AvatarCircle,
  AsideText,
  Menu,
  MenuItem,
  MenuContent,
  CardPrimary,
} from "./styles";
import { StyledBody } from "../shared-components";
import profileImg from "@img/profile.png";

const Aside = () => {
  return (
    <StyledAside>
      <Header>
        <AvatarCircle src={profileImg} alt="" />
        <AsideText>Mi Perfil</AsideText>
      </Header>
      <Menu>
        <MenuItem selected>
          <a href="#">Matches</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Mensajes</a>
        </MenuItem>
      </Menu>

      <MenuContent>
        <CardPrimary></CardPrimary>
        <StyledBody color="grey" align="center">
          Las coincidencias de los Pokémon aparecerán aquí. <br /> Puede
          enviarles un mensaje directamente desde aquí cuando esté listo de
          iniciar una interesante captura.
        </StyledBody>
      </MenuContent>
    </StyledAside>
  );
};

export default Aside;
