import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

// api
import axios from "axios";
import { coinList } from "../config/api";

// style
import styled from "styled-components";
import Coin from "./Coin";

const Container = styled.div`
  background-color: #14161a;
  margin-top: 0;
  text-align: center;
  padding: 1rem 3rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  color: gold;
  font-size: 1.8rem;
  margin: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
    margin: 1rem 0.5rem 0;
  }
`;

const Search = styled.div`
  width: 100%;
  margin: 3.5rem auto 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  

`;

const Label = styled.label`
  color: #fff;
  font-size: 1.2rem;
  position: absolute;
  left: 23px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.3rem;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  border: 2px solid gray;
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    border: 2px solid #fff;
  }

  &:focus {
    border: 2px solid #fff;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const List = styled.div`
  overflow: auto;
  border-radius: 5px;
`;

const Table = styled.table`
  display: table;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: scroll;
  }
`;

const Thead = styled.thead`
  background-color: rgb(238, 188, 29);
  border-radius: 10px 10px 0 0;
`;

const Th = styled.th`
  text-align: right;
  color: #000;
  font-weight: 600;
  padding: 16px;
  line-height: 1.5rem;
  display: table-cell;

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 0.9rem;
  }
`;

const NotFound = styled.h1 `
  color: #fff;
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const CoinsList = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [page, setPage] = useState(1);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(coinList());
      setCoins(data);
      setFilteredCoins(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterCoinsHandler = () => {
      const filterCoins = coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCoins(filterCoins);
    };

    filterCoinsHandler();
  }, [search]);

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
            {filteredCoins.length ? (
              <Table>
                <Thead>
                  <tr>
                    <Th style={{ textAlign: "left" }}>Currency</Th>
                    <Th>Price</Th>
                    <Th>Change24 h</Th>
                    <Th>Market cap</Th>
                  </tr>
                </Thead>
                <tbody>
                  {filteredCoins.slice((page - 1) * 10, (page - 1) * 10 + 10).map((coin) => (
                    <Coin
                      key={coin.id}
                      id={coin.id}
                      image={coin.image}
                      name={coin.name}
                      priceChange={coin.price_change_percentage_24h}
                      price={coin.current_price}
                      rank={coin.market_cap_rank}
                      symbol={coin.symbol}
                      marketCap={coin.market_cap}
                    />
                  ))}
                </tbody>
              </Table>
            ) : (
              <NotFound>Not Found</NotFound>
            )}
          </List>

          <Pagination page={page} setPage={setPage} filteredCoins={filteredCoins} />

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
