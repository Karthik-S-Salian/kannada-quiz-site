import samskrutikaMse1 from "../data/samskruthika_kannada_mse_1.json"
import samskrutikaMse2 from "../data/samskruthika_kannada_mse_2.json"
import balakeMse1 from "../data/balake_kannada_mse_1.json"
import balakeMse2 from "../data/balake_kannada_mse_1.json"
import Question from "./Question"
import "./mcq.css"
import { questionSets } from './../constants'

function McqPage({ questionSet, attemptType }) {
    let data = {}
    if(questionSet==questionSets[0]){
        data = (questionSet == questionSets[0] )?samskrutikaMse1:balakeMse1;
    }else{
        data = (questionSet == questionSets[0]) ?samskrutikaMse2:balakeMse2;
    }

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