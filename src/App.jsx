import React from "react";
import { Global, css } from "@emotion/react";
import {
  StyledHeadline,
  StyledSubtitle,
  StyledBody,
  StyledButtonText,
} from "./components/shared-components";

const App = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />
    </>
  );
};

export default App;
