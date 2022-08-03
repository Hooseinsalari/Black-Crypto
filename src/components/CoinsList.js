import React, { useEffect, useState } from "react";

// api
import axios from "axios";
import { coinList } from "../config/api";

// style
import styled from "styled-components";
import Coin from "./Coin";

const Container = styled.div`
  background-color: #14161a;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  margin-top: 0;
  text-align: center;
  padding: 1rem 0;
`;
const Title = styled.h2`
  color: gold;
  font-size: 1.8rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

const Search = styled.div`
  width: 90%;
  margin: 3rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1.5rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Label = styled.label`
  color: #fff;
  font-size: 1.2rem;
  position: absolute;
  left: 30px;
  bottom: 95px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  border: 1px solid gray;
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    border: 1px solid #fff;
  }

  &:focus {
    border: 2px solid #fff;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    font-size: 1rem;
  }
`;

const List = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
`

const CoinsList = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(coinList());
      setCoins(data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {coins.length ? (
        <>
          <div>
            <Title>Current prices in the cryptocurrency market</Title>

            <Search>
              <Label htmlFor="search">Find the right currency</Label>
              <Input type="text" value={search} onChange={searchHandler} />
            </Search>
          </div>

          <List>
            {coins.map((coin) => (
              <Coin
                key={coin.id}
                image={coin.image}
                name={coin.name}
                priceChange={coin.price_change_percentage_24h}
                price={coin.current_price}
                rank={coin.market_cap_rank}
              />
            ))}
          </List>
        </>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </Container>
  );
};

export default CoinsList;
