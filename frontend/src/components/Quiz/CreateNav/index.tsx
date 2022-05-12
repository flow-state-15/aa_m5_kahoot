import { styled } from '@mui/material/styles';
import { NavLogo } from '../../Navigation/NavElements';
import { Button, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const StyledNav = styled('nav')({
    backgroundColor: 'black',
    height: '56px',
    width: '100vw',
    position: 'absolute',
    top: '0',
    zIndex: '100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const StyledButtonsDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 1rem',
    width: '15rem'
});

export default function CreateNav() {
    return (
        <StyledNav>
            <NavLogo href="/">Logo</NavLogo>
            <StyledButtonsDiv>
                <Button variant="contained" color="secondary">Exit</Button>
                <Button variant="contained" color="success">Save</Button>
                <IconButton aria-label="settings" size="medium">
                    <SettingsIcon color="primary" fontSize="medium"/>
                </IconButton>
            </StyledButtonsDiv>
        </StyledNav>
    )
}