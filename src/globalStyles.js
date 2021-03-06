import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --primary-gradient: linear-gradient(
          113.54deg,
          #fb3a78 -39.39%,
          #fc705e 74.54%
        );
        --black-1: #2c2c2c;
        --grey: #5c5c5c;
        --grey-2: #dfe3ea;
        --bg: #f5f7fa;
        --white: #ffffff;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        max-height: 100vh;
        background-color: var(--bg);
      }
    `}
  />
);
