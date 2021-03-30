import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 20px;
  background-image: var(--primary-gradient);
`;

export const AvatarCircle = styled.img`
  width: 40px;
  height: 40px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  object-fit: cover;
`;

export const AsideText = styled.p`
  margin-left: 8px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  color: white;
`;

export const Menu = styled.ul`
  display: flex;
  margin-top: 20px;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-left: 32px;

  &:first-of-type {
    margin-left: 20px;
  }

  a {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    color: var(--black-1);
  }

  ${(props) =>
    props.selected &&
    css`
      &::after {
        display: block;
        content: "";
        width: 100%;
        height: 5px;
        background-image: var(--primary-gradient);
      }
    `}
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 20px;
`;

export const CardPrimary = styled.div`
  width: 131px;
  height: 195px;
  margin-bottom: 25px;
  background: linear-gradient(113.54deg, #fb3a78 -39.39%, #fc705e 74.54%);
  opacity: 0.8;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
