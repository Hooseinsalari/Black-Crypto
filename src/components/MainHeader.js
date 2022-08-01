import React from 'react';
import styled from 'styled-components';

// image
import bg from "../image/crypto-bg.jpg"
import MainCarousel from './MainCarousel';

const Banner = styled.div `
    /* background-position: ; */
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    background-color: #000;
    width: 100%;
    text-align: center;
    /* height: 50vh; */
    padding: 2rem 0 4rem;
`

const BannerText = styled.div `
    h1 {
        color: gold;
        font-size: 3.8rem;
        margin-bottom: 0px;
    }

    p {
        color: #fff;
        font-size: 1.1rem;
    }

    @media (max-width: 500px) {
        padding: 0 0.5rem;

        h1 {
            font-size: 3.3rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 350px) {
        padding: 0 0.8rem;

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1rem;
        }
    }
`

const MainHeader = () => {
    return (
        <Banner>
            <BannerText>
                <h1>Black Crypto</h1>
                <p>Track your desired digital currency without any hassle</p>
            </BannerText>

            <MainCarousel />
        </Banner>
    );
};

export default MainHeader;