// import styled from 'styled-components'
import { Link } from '@mui/material'
import styled from '@mui/styled-engine'

export const Nav = styled.nav`
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

export const NavLogo = styled(Link)`
    color: #00FF00;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-weight: bold;
    text-decoration: none;
`
