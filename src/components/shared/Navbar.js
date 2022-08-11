import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// style
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 0.5rem 3rem;
  height: 3rem;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  &::before {
    content: "";
    width: ${({ toggle }) => (toggle ? `100%` : `0%`)};
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    /* transition: 'background-color' ease-in-out 0.3s; */
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
  }
`;
const NavIcon = styled.div`
  a {
    font-size: 1.5rem;
    color: gold;
    text-decoration: none;
  }
`;

const IconLink = styled(NavLink) `
    text-decoration: none;
`

const HamburgerIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  margin-top: 0.3rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  position: relative;
  transition: ease-in-out 0.5s;
  z-index: 1000;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: ${(props) => (props.toggle ? `60%` : `0%`)};
    height: 100vh;
    background-color: #14161a;
  }

  @media (max-width: 425px) {
    position: fixed;
    top: 0;
    right: 0;
    width: ${(props) => (props.toggle ? `80%` : `0%`)};
    height: 100vh;
    background-color: #14161a;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 4rem;
    padding: 0;
  }
`;

const NavItem = styled.li`
  margin: 0 2rem;

  @media (max-width: 768px) {
    margin: 2.5rem auto;
  }
`;

const Link = styled(NavLink)`
  color: gold;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
  opacity: 0.7;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: ${({activeClassName}) => activeClassName === 'active' ? '100%' : '0'};
    height: 2px;
    background-color: orange;
    position: absolute;
    bottom: -2px;
    left: 0;
    border-radius: 10px;
    transition: 0.3s;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    opacity: 1;
  }
`;

const CloseMenu = styled.div`
  display: none;
  color: #fff;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 1.9rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <Nav toggle={toggle}>
      <NavIcon>
        <IconLink to="/">BlackCrypto</IconLink>
      </NavIcon>

      <HamburgerIcon onClick={toggleHandler}>
        <FaBars />
      </HamburgerIcon>

      <NavMenu toggle={toggle}>
        <CloseMenu onClick={toggleHandler}>
          <IoClose />
        </CloseMenu>
        <NavList>
          <NavItem>
            <Link activeclassname="active"  to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link activeclassname="active" to="/news">News</Link>
          </NavItem>
          <NavItem>
            <Link activeclassname="active" to="/about">About</Link>
          </NavItem>
        </NavList>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
