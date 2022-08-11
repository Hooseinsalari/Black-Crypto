import React from "react";

// style
import styled from "styled-components";

const Span = styled.span`
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  top: -10px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;

  &:after {
    content: "";
    width: 200px;
    height: 4.8px;
    background: gold;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: animloader 3s ease-in-out infinite;
  }

  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;

const LineLoading = () => {
  return (
    <div>
      <Span></Span>
    </div>
  );
};

export default LineLoading;
