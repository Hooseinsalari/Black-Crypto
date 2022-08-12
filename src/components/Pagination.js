import React from "react";

// style
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 2rem auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  color: gold;
  margin: 0 0.5rem;
  padding: 5px 14px;
  border-radius: 50%;
  background-color: ${({ step, page }) =>
    step === page ? "#393b3e" : "transparent"};
  cursor: pointer;
  transition: 0.3s;
  opacity: ${({ step, page }) => (step === page ? "1" : "0.5")};

  &:hover {
    opacity: 1;
  }
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

  return (
    <Container>
      <Numbers>
        {steps.map((step) => (
          <Span
            page={page}
            step={step}
            onClick={() => pageHanler(step)}
            key={step}
          >
            {step}
          </Span>
        ))}
      </Numbers>
    </Container>
  );
};

export default Pagination;
