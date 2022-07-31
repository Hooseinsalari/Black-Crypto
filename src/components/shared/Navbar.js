import React, { useState } from 'react';

// icons
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// style
import styled from 'styled-components';

const Nav = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #14161a;
    padding: 0.5rem 3rem;
    height: 3rem;
    box-shadow: 0px 4px 14px -4px rgba(250,250,250,0.76);
    &::before {
        content: '';
        width: ${({toggle}) => toggle ? `100%` : `0%`};
        height: 100vh;
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
        /* transition: 'background-color' ease-in-out 0.3s; */
    }

    @media (max-width: 768px) {
        padding: 0.7rem 1.5rem;
    }
`
const NavIcon = styled.div `
    a {
        font-size: 1.5rem;
        color: gold;
        text-decoration: none;
    }
`

const HamburgerIcon = styled.div `
    display: none;
    color: #fff;
    font-size: 1.8rem;
    margin-top: 0.3rem;
    
    @media (max-width: 768px) {
        display: block;
    }
`

const NavMenu = styled.div `
    position: relative;
    transition: ease-in-out 0.5s;

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: 0;
        width: ${(props) => props.toggle ? `60%`: `0%`};
        height: 100vh;
        background-color: #14161a;
    }

    @media (max-width: 425px) {
        position: fixed;
        top: 0;
        right: 0;
        width: ${(props) => props.toggle ? `80%`: `0%`};
        height: 100vh;
        background-color: #14161a;
    }
`

const NavList = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 4rem;
    }
`

const NavItem = styled.li `
    margin: 0 0.8rem;


    @media (max-width: 768px) {
        margin: 2.5rem auto;
    }
`

const NavLink = styled.a `
    color: gold;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    transition: 0.3s;
    color: orange;

`

const CloseMenu = styled.div `
    display: none;
    color: #fff;
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 1.9rem;

    @media (max-width: 768px) {
        display: block;
    }
`

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle((prevState) => !prevState)
    }

    return (
        <Nav toggle={toggle}>
            <NavIcon>
                <a href="#">BlackCrypto</a>
            </NavIcon>

            <HamburgerIcon onClick={toggleHandler}>
                <FaBars />
            </HamburgerIcon>

            <NavMenu toggle={toggle}>
                <CloseMenu onClick={toggleHandler}>
                    <IoClose />
                </CloseMenu>
                <NavList>
                    <NavItem><NavLink href="#">Home</NavLink></NavItem>
                    <NavItem><NavLink href="#">News</NavLink></NavItem>
                    <NavItem><NavLink href="#">About</NavLink></NavItem>
                </NavList>
            </NavMenu>
        </Nav>
    );
};

export default Navbar;