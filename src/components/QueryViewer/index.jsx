import React from "react";
import { useColorMode } from "theme-ui";

import { StyledQueryViewer, Tabs, Tab, Content } from "./styles";

const QueryTab = ({ children }) => {
  return <div>{children}</div>;
};

const VariablesTab = ({ children }) => {
  return <div>{children}</div>;
};

const QueryViewer = ({ children }) => {
  const [colorMode] = useColorMode();
  const [current, setCurrent] = React.useState(0);
  return (
    <StyledQueryViewer mode={colorMode}>
      <Tabs mode={colorMode}>
        <Tab
          mode={colorMode}
          className={`${current === 0 ? "active" : ""}`}
          onClick={() => setCurrent(0)}
        >
          Query
        </Tab>
        <Tab
          mode={colorMode}
          className={`${current === 1 ? "active" : ""}`}
          onClick={() => setCurrent(1)}
        >
          Variables
        </Tab>
      </Tabs>
      <Content>{children[current]}</Content>
    </StyledQueryViewer>
  );
};

export { QueryViewer, QueryTab, VariablesTab };
