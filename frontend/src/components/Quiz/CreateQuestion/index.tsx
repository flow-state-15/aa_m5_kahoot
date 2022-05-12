import { styled } from '@mui/material/styles';

const BackgroundDiv = styled('div')({
    backgroundColor: 'lightgray',
    width: '100vw',
    height: '100vh',
    position: 'relative'
});

const StyledInput = styled('input')({
    width: '95%',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    borderRadius: '5px',
    boxShadow: '0px 5px 0px black',
});

const ContainerDiv = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    position: 'absolute',
    bottom: '15vh',
    width: '95%',
    height: '10rem',
    left: "2.5vw",
    rowGap: '1rem',
})

export default function CreateQuestion() {
    return (
        <BackgroundDiv>
            <StyledInput 
                placeholder='Start typing your question' 
                onFocus={e => {
                    e.target.placeholder = '';
                    e.target.style.outline = 'none';
                }} 
                onBlur={e => e.target.placeholder = 'Start typing your question'}
                sx={{position: 'absolute', top: '25vh', left: '2.5vw', fontSize: '1.25rem', height: '2.5rem'}}
            />
            <ContainerDiv>
                <StyledInput 
                    placeholder='Add answer 1' 
                    onFocus={e => {
                        e.target.placeholder = '';
                        e.target.style.outline = 'none';
                    }} 
                    onBlur={e => e.target.placeholder = 'Add answer 1'}
                    sx={{margin: 'auto', height: '6.375rem'}}
                />
                
                <StyledInput 
                    placeholder='Add answer 2' 
                    onFocus={e => {
                        e.target.placeholder = '';
                        e.target.style.outline = 'none';
                    }} 
                    onBlur={e => e.target.placeholder = 'Add answer 2'}
                    sx={{margin: 'auto', height: '6.375rem'}}
                />
                
                <StyledInput 
                    placeholder='Add answer 3 (optional)' 
                    onFocus={e => {
                        e.target.placeholder = '';
                        e.target.style.outline = 'none';
                    }} 
                    onBlur={e => e.target.placeholder = 'Add answer 3 (optional)'}
                    sx={{margin: 'auto', height: '6.375rem'}}
                />
                
                <StyledInput 
                    placeholder='Add answer 4 (optional)' 
                    onFocus={e => {
                        e.target.placeholder = '';
                        e.target.style.outline = 'none';
                    }} 
                    onBlur={e => e.target.placeholder = 'Add answer 4 (optional)'}
                    sx={{margin: 'auto', height: '6.375rem'}}
                />
            </ContainerDiv>
        </BackgroundDiv>
    );
}