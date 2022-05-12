import { styled } from '@mui/material/styles';

const BackgroundDiv = styled('div')({
    backgroundColor: 'lightgray',
    width: '100vw',
    height: '100vh',
});

const QuestionInput = styled('input')({
    
})

export default function CreateQuiz() {
    return (
        <BackgroundDiv className="create-quiz">
            <h2>This is the CreateQuiz Component</h2>
        </BackgroundDiv>
    );
}