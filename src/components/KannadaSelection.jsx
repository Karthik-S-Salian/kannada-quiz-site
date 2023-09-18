import { kannadaTypes } from "./../constants";
import Card from "./Card"
import { Link } from "react-router-dom";

export default function KannadaSelection({ handleClick }) {
    return (
        <>
            {kannadaTypes.map((type, index) => {
                return (
                    <Link to="/attempt" key={index}>
                        <Card
                            title={type}
                            description=""
                            handleClick={() => { handleClick(type) }}
                        />
                    </Link>
                )
            })}
        </>
    )
}