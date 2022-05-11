import styled from 'styled-components'
import { Link } from '@mui/material'
import CreateStyled from '@mui/styled-engine'

export const Nav = styled.div`
    background: #000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 10;
    width: 100vw;

    @media screen and (max-width: 960px){
        transistion: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1800px;
`

export const NavLogo = CreateStyled(Link)`
    color: #00FF00;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-weight: bold;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: cneter;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 761px){
        display: none;
    }
`
export const NavItem = styled.ul`
    height: 80px
`
export const NavLinks = CreateStyled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 760px){
        display: none;
    }
`

export const NavBtnLink = CreateStyled(Link)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-and-out;
        background: #fff;
        color: #010606;
    }
`
