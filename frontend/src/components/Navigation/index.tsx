// import { Link } from 'react-router-dom'
import { NavLogo } from './NavElements';
// import { Link, Button } from '@mui/material';

export default function Navigation() {
    return (
        <div className="navigation" >
            <h2>This is the Navigation Component </h2>
            {/* <Link component={NavLogo} to='/'>TESTING</Link> */}
            <NavLogo href='/' > Styled </NavLogo>
            {/* <Link component={NavLogo} href="/" > MUI </Link> */}
        </div>
    );
}
