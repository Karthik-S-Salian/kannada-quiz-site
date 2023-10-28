import sanskritikaData from "../data/samskruthika_kannada_mse_1.json"
import balakeData from "../data/balake_kannada_mse_1.json"
import Question from "./Question"
import "./mcq.css"
import { kannadaTypes } from './../constants'
import {useRef} from "react";
import { getNRandomElements } from "../utils"

export default function Exam({ kannadaType, attemptType }) {
    const selectedOptions= useRef({})
    const data = getNRandomElements(kannadaType == kannadaTypes[0] ? balakeData : sanskritikaData,40)
    
    return (
        <>
            <ul className="question-list-container kannada-font">
                {data.map((mcq, index) => {
                    return (
                        <Question
                            key={index}
                            attemptType={attemptType}
                            index={index}
                            question={mcq["question"]}
                            options={mcq["options"]}
                            selectionRef = {selectedOptions}
                        />
                    )
                })}
            </ul>
        </>
    )
}