// import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {
    NavLogo,
    Nav,
    NavbarContainer,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavElements';

// import { Link, Button } from '@mui/material';

export default function Navigation() {

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("ADD A TOGGLE")
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo href='/'>Logo</NavLogo>
                    <MobileIcon onClick={(event) => buttonHandler(event as any)}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks href="/library">Library</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/counter">Counter?</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/createquiz">Create a Quiz</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href="/login">Log In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}