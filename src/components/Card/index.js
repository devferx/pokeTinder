import React from "react";
import Stories from "react-insta-stories";
import PropTypes from "prop-types";

import CardBody from "./CardBody";
import CardInfo from "./CardInfo";

import {
  MainCardContainer,
  StyledCard,
  CardImage,
  CardHeader,
  CardTitle,
} from "./styles";

const Card = ({ name, desc, pictures, place, distance, skills, open }) => {
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
        </CardImage>

        <CardBody
          desc={desc}
          place={place}
          distance={distance}
          open={open}
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
