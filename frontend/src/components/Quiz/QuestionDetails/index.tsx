import { styled } from "@mui/material"

const TestText = styled("h2")({
    color: "red",
    position: "absolute",
})

export default function QuestionDetails() {
    return (
        <TestText>QuestionDetailsComponent</TestText>
    )
} 