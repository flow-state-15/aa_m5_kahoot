import { styled } from '@mui/material/styles';
import googleLogo from '../../assets/google-logo.png';

const LoginButton = styled('button')({
    padding: 8,
    borderRadius: 4,
    fontFamily: 'Montserrat, sans-serif',
    minWidth: '360px',
    display: "flex", 
    justifyContent: "center",
    backgroundColor: "white",
    fontSize: "0.875rem",

  });

const LoginDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
});

const PretendForm = styled('form')({
    display: 'flex',
    justifyContent: 'center',
});

const GoogleLogo = styled('img')({
    position: 'absolute',
    height: '1.5rem',
    left: '28.5rem',
    top: '21.75rem',
});

export default function Login() {
    return (
        <LoginDiv className="login">
            <h2 className="login-title">Log In</h2>
            <PretendForm className="login-form">
                <LoginButton className="login-button-dummy">Continue with Google</LoginButton>
                <GoogleLogo src={googleLogo}/>
            </PretendForm>
        </LoginDiv>
    );
}