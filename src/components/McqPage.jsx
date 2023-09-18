import sanskritikaData from "../data/samskruthika_kannada_mse_1.json"
import balakeData from "../data/balake_kannada_mse_1.json"
import Question from "./Question"
import "./mcq.css"
import { kannadaTypes } from './../constants'

function McqPage({ kannadaType, attemptType }) {
    const data = kannadaType == kannadaTypes[0] ? balakeData : sanskritikaData;
    return (
        <>
            <ul className="question-list-container kannada-font">
                {data.map((mcq, index) => {
                    return (
                        <Question
                            key={index}
                            attemptType={attemptType}
                            index={index + 1}
                            question={mcq["question"]}
                            options={mcq["options"]}
                        />
                    )
                })}
            </ul>
        </>
    )
}

export default McqPage