import { styled } from '@mui/material/styles';

const BackgroundDiv = styled('div')({
    backgroundColor: 'lightgray',
    width: '100vw',
    height: '100vh',
});

const StyledInput = styled('input')({
    width: '95%',
    height: '46px',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    borderRadius: '5px',
});

const ContainerDiv = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    position: 'absolute',
    bottom: '5vh',
    width: '95vw',
    height: '10rem',
    left: "2.5vw"
})

export default function CreateQuiz() {
    return (
        <BackgroundDiv>
            <StyledInput 
                placeholder='Start typing your question' 
                onFocus={e => e.target.placeholder = ''} 
                onBlur={e => e.target.placeholder = 'Start typing your question'}
                sx={{position: 'absolute', top: '25vh', left: '2.5vw', fontSize: '1.25rem',}}
            />
            <ContainerDiv>
                <StyledInput 
                    placeholder='Add answer 1' 
                    onFocus={e => e.target.placeholder = ''} 
                    onBlur={e => e.target.placeholder = 'Add answer 1'}
                    sx={{margin: 'auto'}}
                />
                
                <StyledInput 
                    placeholder='Add answer 2' 
                    onFocus={e => e.target.placeholder = ''} 
                    onBlur={e => e.target.placeholder = 'Add answer 2'}
                    sx={{margin: 'auto'}}
                />
                
                <StyledInput 
                    placeholder='Add answer 3 (optional)' 
                    onFocus={e => e.target.placeholder = ''} 
                    onBlur={e => e.target.placeholder = 'Add answer 3 (optional)'}
                    sx={{margin: 'auto'}}
                />
                
                <StyledInput 
                    placeholder='Add answer 4 (optional)' 
                    onFocus={e => e.target.placeholder = ''} 
                    onBlur={e => e.target.placeholder = 'Add answer 4 (optional)'}
                    sx={{margin: 'auto'}}
                />
            </ContainerDiv>
        </BackgroundDiv>
    );
}