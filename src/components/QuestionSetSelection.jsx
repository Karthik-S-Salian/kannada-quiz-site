import { questionSets } from "../constants";
import Card from "./Card"
import { Link } from "react-router-dom";

export default function QusetionSetSelection({ handleClick }) {
    return (
        <>
            <Link to="/attempt">
                <Card
                    title="MSE 1"
                    description=""
                    handleClick={() => { handleClick(questionSets[0]) }}
                />
            </Link>

            <Link to="/attempt">
                <Card
                    title="MSE 2"
                    description=""
                    handleClick={() => { handleClick(questionSets[1]) }}
                />
            </Link>
        </>
    )
}