import styled from "@emotion/styled";

export const StyledActionContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 80px;
  left: 50%;
  z-index: 5;
  transform: translateX(-50%);
`;

export const ActionButton = styled.button`
  display: ${(p) => (p.disabled ? "none" : "grid")};
  place-items: center;
  box-sizing: border-box;
  width: ${(props) => (props.small ? "70px" : "91px")};
  height: ${(props) => (props.small ? "70px" : "91px")};
  margin-right: 8px;
  border: none;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:last-child {
    margin-right: 0px;
  }
`;
