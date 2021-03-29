import styled from "@emotion/styled";

export const StyledHeadline = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 48px;
`;

export const StyledSubtitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 48px;
`;

export const StyledBody = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.black ? 900 : "normal")};
  font-size: 14px;
  line-height: 24px;
`;

export const StyledButtonText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;
