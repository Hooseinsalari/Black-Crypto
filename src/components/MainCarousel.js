import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// function
import { numberWithCommas } from "../helper/functions";

// api
import axios from "axios";
import { trendingCoins } from "../config/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

// style
import styled from "styled-components";

const CoinLink = styled(Link)`
  text-decoration: none;
`

const CoinContainer = styled.div`
  /* margin-top: 4.5rem; */
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

const CoinImage = styled.div`
  width: 4.5rem;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 4rem;
  }
`;

const CoinText = styled.div`
  color: white;
`;

const TextTop = styled.div `
    display: flex;
    align-items: center;

    p {
        margin-right: 0.5rem;
        font-weight: 600;
    }
`

const CoinPrice = styled.span `
    color: ${({priceChange}) => priceChange>0 ? 'green' : 'red'};
    font-weight: 600;
`

const Price = styled.span `
    font-size: 1.1rem;
    font-weight: 700;
`

const MainCarousel = () => {
  const [trendCoins, setTrendCoins] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      let { data } = await axios.get(trendingCoins());
      setTrendCoins(data);
    };

    fetchDate();
  }, []);

  return (
    <>
      
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination, Autoplay]}
          speed={5000}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 2,
            },
            425: {
              width: 425,
              slidesPerView: 3,
            },
            640: {
              width: 640,
              slidesPerView: 4,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
          }}
        >
          {trendCoins.map((coin) => (
            <SwiperSlide key={coin.id}>
              {/* react router Link */}
              <CoinLink to={`/coins/${coin.id}`}>
                <CoinContainer>
                  <CoinImage>
                    <img src={coin.image} alt="" />
                  </CoinImage>

                  <CoinText>
                    <TextTop>
                      <p>{coin.name}</p>
                      <CoinPrice priceChange={coin.price_change_percentage_24h}>
                        {parseFloat(coin.price_change_percentage_24h).toFixed(2)}
                      </CoinPrice>
                    </TextTop>
                    <Price>$ {numberWithCommas(coin.current_price)}</Price>
                  </CoinText>
                </CoinContainer>
              </CoinLink>
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
};

export default MainCarousel;
