import React from "react";

// icon
import { FaArrowRight } from "react-icons/fa";

// style
import styled from "styled-components";

const Container = styled.div`
    width: 19rem;
    height: 13rem;
    box-shadow: #000 0px 1px 4px;
    text-align: center;
    margin: 1rem;
    border-radius: 5px;
    padding: 1rem 0.5rem;
`

const Title = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    color: #fff;
    margin-bottom: 1.5rem;
`

const ArrowIcon = styled.div `
    background-color: #1f2937;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.1rem;
    border: 1px solid #4b5563;
    cursor: pointer;
    
    svg {
        transition: 0.3s;
    }

    &:hover svg {
        transform: translateX(2px);
    }
`

const Rank = styled.span `
    background-color: #1f2937;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.1rem;
    font-weight: 500;
    border: 1px solid #4b5563;
`

const CoinImage = styled.img `
    width: 4rem;
`

const CoinText = styled.div `
    color: #fff;
`

const CoinTextTop = styled.div `
    margin: 1.5rem auto;
`

const CoinName = styled.span `
    margin-right: 4.5rem;
`

const CoinPriceChange = styled.span `
margin-left: 4.5rem;
color: ${({priceChange}) => priceChange > 0 ? 'green' : 'red'};


`

const CoinPrice = styled.span `
    margin-top: 0.5rem;
`

const Coin = ({image, name, priceChange, price, rank}) => {
    const numberWithCommas = (num) => {
        return parseFloat(num).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  return (
      <Container>
        <Title>
            <Rank>{rank}</Rank>
            <ArrowIcon>
                <FaArrowRight />
            </ArrowIcon>
        </Title>

      <div>
        <CoinImage src={image} alt={name} />
      </div>

      <CoinText>
        <CoinTextTop>
            <CoinName>{name}</CoinName>
            <CoinPriceChange priceChange={priceChange}>{parseFloat(priceChange).toFixed(2)} %</CoinPriceChange>
        </CoinTextTop>
        <CoinPrice>$ {numberWithCommas(price)}</CoinPrice>
      </CoinText>

    </Container>
  );
};

export default Coin;
