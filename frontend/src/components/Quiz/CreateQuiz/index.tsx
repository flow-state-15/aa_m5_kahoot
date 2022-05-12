import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CreateQuestion from '../CreateQuestion';

interface QProps {
    showNav: boolean,
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function CreateQuiz(props: QProps) {
    
    useEffect(() => {
        props.setShowNav(false);
    }, [])

    return (
        <>
            <CreateQuestion />
        </>
    );
}