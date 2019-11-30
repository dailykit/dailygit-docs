import styled, { css } from "styled-components";

export const StyledQueryViewer = styled.div(
  ({ mode }) => css`
    margin-bottom: 16px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid ${mode === "light" ? "#e2d8d8" : "#2d3747"};
    .prism-code {
      margin: 0;
      padding: 0;
      background: #0f202d !important;
      .token {
        color: #fff;
      }
    }
  `
);

export const Tabs = styled.div(
  ({ mode }) => css`
    height: 48px;
    padding-left: 16px;
    border-bottom: 1px solid ${mode === "light" ? "#e2d8d8" : "#2d3747"};
  `
);

export const Tab = styled.span(
  ({ mode }) =>
    css`
      height: 46px;
      color: #b19f9f;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      line-height: 48px;
      margin-right: 16px;
      position: relative;
      display: inline-block;
      text-transform: uppercase;
      &.active {
        color: ${mode === "light" ? "#2d3747" : "#fff"};
        font-weight: 600;
        ::after {
          content: "";
          left: 0;
          width: 100%;
          height: 3px;
          bottom: -3px;
          position: absolute;
          background: ${mode === "light" ? "#2d3747" : "#fff"};
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
        }
      }
    `
);

export const Content = styled.div`
  padding: 16px;
  color: #fff;
  background: #0f202d;
`;
