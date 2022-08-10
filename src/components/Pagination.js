import React from "react";

// style
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  background-color: gold;
  margin: 0.5rem;
  padding: 10px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Numbers = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Pagination = ({ page, setPage, filteredCoins }) => {
  const steps = [];
  let pageCount = (filteredCoins.length / 10).toFixed(0);

  for (let i = 1; i <= pageCount; i++) {
    steps.push(i);
  }

  const pageHanler = (step) => {
    setPage(step);
    window.scroll(0, 600);
  };

  const prevPageHanler = () => {
    setPage((prevState) => prevState - 1);
  };

  const nextPageHanler = () => {
    setPage((prevState) => prevState + 1);
  };

  console.log(pageCount);

  return (
    <Container>
      <Span onClick={prevPageHanler}>prev</Span>
      <Numbers>
        {steps.map((step) => (
          <Span onClick={() => pageHanler(step)} key={step}>
            {step}
          </Span>
        ))}
      </Numbers>
      <Span onClick={nextPageHanler}>next</Span>
    </Container>
  );
};

export default Pagination;
