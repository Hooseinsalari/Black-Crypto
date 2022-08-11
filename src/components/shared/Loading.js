import React from "react";

// style
import styled from "styled-components";

const Loader = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Span = styled.span`
  position: relative;
  width: 12rem;
  height: 12rem;
  margin: 4rem auto;

  &:after {
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 2px 0 gold inset;
    animation: rotate 2s linear infinite;
  }

  &:before {
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
  }

  @keyframes rotate {
  0% {  transform: rotate(0)}
  100% { transform: rotate(360deg)}
}
`;

const Loading = () => {
  return (
    <Loader>
      <Span></Span>
    </Loader>
  );
};

export default Loading;
