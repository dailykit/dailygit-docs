import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:200,300,300i,400,400i,500,500i,600,600i&display=swap');
   pre.prism-code {
    overflow-x: auto;
   }
`;

export default ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
