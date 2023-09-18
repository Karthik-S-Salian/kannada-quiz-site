import { attemptTypes } from "./../constants";
import Card from "./Card"
import { Link } from "react-router-dom";

export default function AttemptSelection({ handleClick }) {
    return (
        <>
            <Link to="/mcqs">
                <Card
                    title="Learner"
                    description="correct answer will be displayed in green"
                    handleClick={() => { handleClick(attemptTypes[0]) }}
                />
            </Link>

            <Link to="/mcqs">
                <Card
                    title="Intermediate"
                    description="correct answer is shown after selecting option"
                    handleClick={() => { handleClick(attemptTypes[1]) }}
                />
            </Link>

            <Link to="/test">
                <Card
                    title="Expert"
                    description="not implemented work in progress"
                    handleClick={() => { handleClick(attemptTypes[2]) }}
                />
            </Link>
        </>
    )
}