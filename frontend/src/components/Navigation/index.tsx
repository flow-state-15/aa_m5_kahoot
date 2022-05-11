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

        const button: HTMLButtonElement = event.currentTarget;
        setClickedButton(button.name);
      };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo href='/'>Logo</NavLogo>
                    <MobileIcon onClick={buttonHandler}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks href="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/service">Service</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}
