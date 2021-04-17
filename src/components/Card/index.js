import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Stories from "react-insta-stories";
import PropTypes from "prop-types";

import CardBody from "./CardBody";
import CardInfo from "./CardInfo";

import {
  MainCardContainer,
  StyledCard,
  CardImage,
  CardHeader,
  BtnInfoIcon,
  BtnClose,
  CardTitle,
} from "./styles";

import infoIcon from "@svg/info-icon.svg";
import closeIcon from "@svg/close-icon.svg";

const Card = ({ name, desc, pictures, place, distance, skills, open }) => {
  const dispatch = useDispatch();
  const cardIsOpen = useSelector((state) => state.cardIsOpen);

  return (
    <MainCardContainer>
      <StyledCard>
        <CardImage>
          <Stories stories={pictures} width={424} height={424} loop />
          <CardHeader>
            <CardTitle className="title">{name}</CardTitle>
            <CardInfo icon="Region" text={place} />
            <CardInfo
              icon="Global"
              text={`${distance} kilómetros de distancia`}
            />
          </CardHeader>
          {!cardIsOpen && (
            <BtnInfoIcon onClick={() => dispatch({ type: "OPEN_CARD" })}>
              <img src={infoIcon} alt="More Info" />
            </BtnInfoIcon>
          )}
        </CardImage>

        {cardIsOpen && (
          <BtnClose onClick={() => dispatch({ type: "CLOSE_CARD" })}>
            <img src={closeIcon} alt="Close" />
          </BtnClose>
        )}

        <CardBody
          open={cardIsOpen}
          desc={desc}
          place={place}
          distance={distance}
          skills={skills}
        />
      </StyledCard>
    </MainCardContainer>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  pictures: PropTypes.arrayOf(PropTypes.any),
  skills: PropTypes.arrayOf(PropTypes.string),
  place: PropTypes.string,
  distance: PropTypes.number,
  open: PropTypes.bool,
};

Card.defaultProps = {
  open: true,
};

export default Card;
