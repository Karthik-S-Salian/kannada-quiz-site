import sanskritikaData from "../data/samskruthika_kannada_mse_1.json"
import balakeData from "../data/balake_kannada_mse_1.json"
import Question from "./Question"
import "./mcq.css"

function MCQList(props) {

  const data = props.isBalake?balakeData:sanskritikaData;
  return (
    <ul className="question-list-container kannada-font">
        {data.map((mcq,index)=>{
            return (
                <Question
                    key={index}
                    attemptType = {props.attemptType}
                    index = {index+1}
                    question = {mcq["question"]}
                    options = {mcq["options"]}
                />
            )
        })}
    </ul>
  )
}

export default MCQList