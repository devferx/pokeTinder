import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MainCardContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px 0 40px 0;
`;

export const StyledCard = styled.article`
  position: relative;
  width: 424px;
  max-height: 100vh;
  z-index: 2;
`;

export const CardImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: calc(30%);
    background: linear-gradient(
      1.13deg,
      #000000 -6.28%,
      rgba(255, 255, 255, 0) 90%
    );
    z-index: 8;
  }
`;

export const CardHeader = styled.div`
  display: ${(p) => (p.open ? "none" : "block")};
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 50%;
  z-index: 10;
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

export const IconContainer = styled.div`
  margin-right: 8px;
`;

export const BtnInfoIcon = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  border: none;
  background: transparent;
  z-index: 99999;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 392px;
  right: 15px;
  border: none;
  background: transparent;
  z-index: 9999999;
`;

export const StyledCardBody = styled.div`
  position: relative;
  display: ${(p) => (p.open ? "block" : "none")};
  flex: 1;
  background-color: white;
  overflow-y: scroll;
`;

export const CardBodyContainer = styled.div`
  padding: 0 16px;
`;

export const CardBodyTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: var(--grey-2);
`;

export const Skill = styled.span`
  display: inline-block;
  padding: 10px;
  margin-right: 8px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: var(--grey);
  border: 1px solid ${(p) => (p.active ? "#FB3A78" : "var(--grey)")};
  border-radius: 50px;
  user-select: none;

  ${(p) =>
    p.active &&
    css`
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}

  &:last-child {
    margin-right: 0px;
  }
`;

export const BlankBox = styled.div`
  height: 124px;
`;
