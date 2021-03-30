import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const circleAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(2.5);
  }

  100% {
    transform: scale(1);
  }
`;

export const StyledLoader = styled.div`
  position: relative;
  width: 128px;
  height: 128px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid white;
    object-fit: cover;
    z-index: 45;
  }

  .ball {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #f7dcdf;
    border: 4px solid #f7cfd1;
    animation: 2s infinite ${circleAnimation};
    will-change: transform;
    z-index: 10;
  }
`;
