import React from "react";
import { Link } from "gatsby";
import { useColorMode } from "theme-ui";

import { PaginationWrapper, Card } from "./styles";

import { ArrowLeft, ArrowRight } from "../assets/svgs";

const Pagination = ({ prev, next }) => {
  const [colorMode] = useColorMode();
  console.log(colorMode);
  return (
    <PaginationWrapper>
      {prev && (
        <Link to={prev.link}>
          <Card mode={colorMode}>
            <ArrowLeft color="#AFA4A4" />
            <div>
              <span>Previous</span>
              <h3>{prev.name}</h3>
            </div>
          </Card>
        </Link>
      )}
      {next && (
        <Link to={next.link}>
          <Card mode={colorMode}>
            <div>
              <span>Next</span>
              <h3>{next.name}</h3>
            </div>
            <ArrowRight color="#AFA4A4" />
          </Card>
        </Link>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
