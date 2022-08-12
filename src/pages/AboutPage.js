import React from "react";

// image
import pic from "../image/aboutPic.jpg";

// icons
import { FcLike } from "react-icons/fc";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

// style
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  padding: 2rem;
  width: 20rem;
  margin: 3rem auto;
  background-color: #16171a;

  @media (max-width: 425px) {
    width: 85%;
    margin: 2rem auto;
    padding: 1rem;
  }
`;

const Logo = styled.img`
  width: 8rem;
  margin: auto;
  border-radius: 50%;
`;

const Text = styled.div`
  color: #fff;

  h2 {
    font-weight: 600;
  }

  p {
    width: 20rem;
    margin: auto;
    font-weight: 300;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;

    p {
      width: 90%;
    }
  }
`;
const Link = styled.a`
  display: inline-block;
  margin: 2rem 1rem 0.5rem;
  font-size: 1.5rem;
  color: #fff;
`;

const AboutPage = () => {
  return (
    <Container>
      <div>
        <Logo src={pic} alt="Hossein" />
      </div>

      <Text>
        <h2>Hossein Salari</h2>
        <p>
          Hi and welcome to the Black Crypto. I made this app with react and
          styled-components. I hope you like and enjoy it, also you can find me
          with the below links. much love <FcLike />
        </p>
      </Text>

      <div>
        <Link
          href="https://github.com/Hooseinsalari"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://instagram.com/hossein.salari777"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/in/hossein-salari-099543215/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </Link>
        <Link href="https://t.me/Hossein777s" target="_blank" rel="noreferrer">
          <FaTelegramPlane />
        </Link>
      </div>
    </Container>
  );
};

export default AboutPage;
