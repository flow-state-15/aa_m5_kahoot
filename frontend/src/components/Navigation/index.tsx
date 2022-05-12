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

type MyProps = {
    toggle?: () => void;
}

export default function Navigation(props: MyProps) {

    console.log(props.toggle)

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo href='/'>Logo</NavLogo>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks href="/library/all">Library</NavLinks>
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
