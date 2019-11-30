import styled from "styled-components";

export const PaginationWrapper = styled.div`
  height: 120px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  a {
    text-decoration: none;
    :hover > div {
      border: 1px solid #8ac03b;
    }
  }
  @media (max-width: 567px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border: ${({ mode }) =>
    mode === "light" ? "1px solid #e2d8d8" : "1px solid #2d3747"};
  padding: 16px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  span {
    color: #9daab6;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.625;
  }
  h3 {
    margin: 0;
    color: ${({ mode }) => (mode === "light" ? "#2d3747" : "#fff")};
  }
`;
