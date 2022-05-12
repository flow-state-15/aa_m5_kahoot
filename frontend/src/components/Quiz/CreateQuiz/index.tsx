import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CreateQuestion from '../CreateQuestion';
import CreateNav from '../CreateNav';
import QuestionDetails from '../QuestionDetails';

interface QProps {
    showNav: boolean,
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>,
}

const StyledDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'lightgray',
});

const PageContainer = styled('div')({
    display: 'flex',
    maxWidth: '100vw',
});

const SideContainer = styled('div')({
    width: '12.808rem',
    border: '1px solid black',
    backgroundColor: 'white',
});

export default function CreateQuiz(props: QProps) {
    
    useEffect(() => {
        props.setShowNav(false);
    }, []);

    return (
        <StyledDiv>
            <CreateNav />
            <PageContainer>
                <SideContainer>

                </SideContainer>
                <CreateQuestion />
                <QuestionDetails />
            </PageContainer>
        </StyledDiv>
    );
}