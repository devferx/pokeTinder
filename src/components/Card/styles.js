import styled from "@emotion/styled";

export const MainCardContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px 0 40px 0;
`;

export const StyledCard = styled.article`
  width: 424px;
  max-height: 100%;
`;

export const CardImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    height: calc(30%);
    background: linear-gradient(
      1.13deg,
      #000000 -6.28%,
      rgba(255, 255, 255, 0) 90%
    );
  }
`;

export const CardHeader = styled.div`
  position: absolute;
  bottom: 55px;
  left: 16px;
  width: 50%;
`;

export const CardTitle = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CardInfoItem = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const CardIcon = styled.img`
  margin-right: 8px;
`;

export const CardImageCarousel = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  img {
    flex: 0 0 100%;
    width: 100%;
    aspect-ratio: 235 / 272;
    object-fit: cover;
    scroll-snap-align: center;
  }
`;

export const CardBody = styled.div``;
