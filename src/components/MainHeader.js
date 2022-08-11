import React from 'react';
import MainCarousel from './MainCarousel';

// image
import bg from "../image/bg.jpg"

// style
import styled from 'styled-components';

const Banner = styled.div `
    background: linear-gradient(153deg, rgba(156,163,175,1) 0%, rgba(0,0,0,0.8) 0%), url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    text-align: center;
    padding: 2rem 0 4rem;
`

const BannerText = styled.div `
    margin-bottom: 4.5rem;

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