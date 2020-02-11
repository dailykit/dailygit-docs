import React from "react";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Main from "../Main";

import { StyledLayout } from "./styled";

const Layout = ({ children }) => {
  const [isSidebarVisible, toggleSidebar] = React.useState(false);
  return (
    <StyledLayout>
      <Header
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />
      <Sidebar isVisible={isSidebarVisible} />
      <Main>{children}</Main>
    </StyledLayout>
  );
};

export default Layout;
