import { styled } from '@mui/material/styles';
import googleLogo from '../../assets/google-logo.png';

const LoginButton = styled('button')({
    padding: 8,
    borderRadius: 4,
    fontFamily: 'Montserrat, sans-serif',
    minWidth: '360px',
    minHeight: '42px',
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
    height: '37rem',
    width: '25rem',
    border: '1px solid #e0e0e0',
    position: 'relative',
    top: '0vh',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px black',
    backgroundColor: 'white',
});

const PretendForm = styled('form')({
    display: 'flex',
    justifyContent: 'center',
});

const GoogleLogo = styled('img')({
    position: 'absolute',
    height: '1.5rem',
    left: '2rem',
    top: '20rem',
});

const BackgroundDiv = styled('div')({
    width: '100vw',
    height: '100vh',
    backgroundColor: 'lightgray',
    display: 'flex',
    justifyContent: 'center'
})

export default function Login() {
    return (
        <BackgroundDiv>
            <LoginDiv className="login">
                <h2 className="login-title">Log In</h2>
                <PretendForm className="login-form">
                    <LoginButton className="login-button-dummy">Continue with Google</LoginButton>
                </PretendForm>
                <GoogleLogo src={googleLogo}/>
            </LoginDiv>
        </BackgroundDiv>
    );
}