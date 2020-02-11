import styled, { css } from "styled-components";

export const Aside = styled.aside(
  ({ isVisible }) => css`
    background: #fcfcfc;
    border-right: 1px solid #e0e0e0;
    overflow-y: auto;
    overflow-x: hidden;
    @media (max-width: 567px) {
      top: 56px;
      bottom: 0;
      z-index: 10;
      width: 280px;
      position: absolute;
      display: ${isVisible ? "block" : "none"};
    }
  `
);

export const List = styled.ul(css`
  height: auto;
`);

export const ListHeading = styled.span(
  ({ isActive }) => css`
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    width: 100%;
    display: block;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    color: #a7a7a7;
    letter-spacing: 0.4px;
    cursor: pointer;
    ~ li {
      :before {
        left: -92%;
      }
      a {
        padding-left: 32px;
      }
    }
  `
);

export const ListItem = styled.li(
  ({ isActive }) => css`
    min-height: 40px;
    line-height: 40px;
    list-style: none;
    position: relative;
    ${isActive &&
      css`
        &:before {
          content: "";
          position: absolute;
          height: 8px;
          width: 100%;
          left: -96%;
          background: #26d86d;
          bottom: calc(50% - 4px);
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }
      `}
    a {
      width: 100%;
      height: 40px;
      display: block;
      color: ${isActive ? "#000" : "#a79e9e"};
      padding-left: 20px;
      text-decoration: none;
      :hover {
        background: #f5f5f5;
      }
    }
  `
);
