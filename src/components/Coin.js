import React from "react";
import { useNavigate } from "react-router-dom";

// function
import { numberWithCommas, intToString } from "../helper/functions";

// style
import styled from "styled-components";

const Tr = styled.tr`
  background-color: #16171a;
  cursor: pointer;
  transition: 0.3s;
  color: #fff;
  border-bottom: 1px solid rgba(81, 81, 81, 1);

  &:hover {
    background-color: #131111;
  }
`;

const Th = styled.th`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 16px;
  line-height: 1.5rem;
  text-align: left;

  @media (max-width: 768px) {
    padding: 14px;
    gap: 10px;
  }
`;

const CoinImage = styled.img`
  width: 3rem;
  height: 3rem;

  @media (max-width: 768px) {
    width: 2.6rem;
    height: 2.6rem;
  }
`;

const CoinText = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CoinSymbol = styled.span`
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const CoinName = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
  color: darkgray;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Td = styled.td`
  display: table-cell;
  padding: 16px;
  line-height: 1.5rem;
  text-align: right;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

const CoinPriceChange = styled.td`
  color: ${({ priceChange }) => (priceChange > 0 ? "green" : "red")};
  display: table-cell;
  padding: 16px;
  line-height: 1.5rem;
  text-align: right;
  font-size: 0.9rem;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

const Coin = ({ image, name, symbol, priceChange, price, marketCap, id }) => {
  const navigate = useNavigate();

  return (
    <Tr onClick={() => navigate(`/coins/${id}`)}>
      <Th>
        <CoinImage src={image} alt={name} />

        <CoinText>
          <CoinSymbol>{symbol}</CoinSymbol>
          <CoinName>{name}</CoinName>
        </CoinText>
      </Th>
      <Td>${numberWithCommas(price)}</Td>
      <CoinPriceChange priceChange={priceChange}>
        {priceChange.toFixed(2)} %
      </CoinPriceChange>
      <Td>${intToString(marketCap)}</Td>
    </Tr>
  );
};

export default Coin;
