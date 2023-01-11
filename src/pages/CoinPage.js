import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// api
import axios from "axios";
import { singleCoin } from "../services/api";

// component
import CoinChart from "../components/CoinChart";
import LineLoading from "../components/shared/LineLoading";

// function
import { numberWithCommas } from "../helper/functions";

// react html parser (for remove html tag that i get from api in description)
import ReactHtmlParser from "react-html-parser";

// style
import styled from "styled-components";

const Page = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Info = styled.div`
  width: 30%;
  border-right: 2px solid #fff;
  text-align: center;
  color: #fff;

  &::after {
    content: "";
    width: 95%;
    height: 2px;
    background-color: #fff;
    margin: 3rem auto;
    display: none;
    opacity: 0.2;
  }

  a {
    color: orange;
    text-decoration: none;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
    border-right: none;
    text-align: center;

    &::after {
      display: block;
    }
  }
`;

const CoinImage = styled.div`
  height: 200px;

  img {
    height: 100%;
  }

  @media (max-width: 425px) {
    height: 170px;
  }
`;

const CoinName = styled.h2`
  font-size: 2.2rem;
  margin: 1.5rem auto;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

const CoinDesc = styled.div`
  text-align: justify;
  word-break: break-all;
  font-size: 1rem;
  padding: 0 1.5rem;
  margin: 1.5rem auto;
  font-weight: 400;
  letter-spacing: 0.05rem;

  @media (max-width: 1024px) {
    text-align: center;
    line-height: 1.5rem;
    padding: 0 3rem;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`;

const Data = styled.div`
  margin: 1.5rem auto;
  text-align: left;
  padding: 0 1.5rem;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 425px) {
    padding: 0 0.5rem;
  }
`;

const CoinData = styled.div`
  p {
    font-size: 1rem;
    font-weight: 600;
  }

  span {
    font-weight: 400;
    margin-left: 0.3rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    p,
    span {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 425px) {
    p,
    span {
      font-size: 1rem;
      letter-spacing: 1px;
    }
  }
`;

const Chart = styled.div`
  width: 70%;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(singleCoin(id));
      setCoin(data);
    };

    fetchCoin();

    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      {coin ? (
        <Container>
          <Info>
            <CoinImage>
              <img src={coin.image.large} alt={coin.name} />
            </CoinImage>

            <CoinName>{coin.name}</CoinName>

            <CoinDesc>
              {/* <p>{coin.description.en.split(". ")[0].replace(/<[^>]*>?/gm, '')}.</p> */}
              <p>{ReactHtmlParser(coin.description.en.split(". ")[0])} .</p>
            </CoinDesc>

            <Data>
              <CoinData>
                <p>
                  Rank : <span>{coin.market_cap_rank}</span>
                </p>
              </CoinData>

              <CoinData>
                <p>
                  Current Price :
                  <span>
                    ${numberWithCommas(coin.market_data.current_price.usd)}
                  </span>
                </p>
              </CoinData>

              <CoinData>
                <p>
                  Market Cap :
                  <span>
                    ${numberWithCommas(coin.market_data.market_cap.usd)}
                  </span>
                </p>
              </CoinData>
            </Data>
          </Info>

          <Chart>
            <CoinChart coin={coin} />
          </Chart>
        </Container>
      ) : (
        <>
          <LineLoading />
        </>
      )}
    </Page>
  );
};

export default CoinPage;
