import Question from "./Question"
import "./mcq.css"
import { questionSets ,getData} from './../constants'

function McqPage({ questionSet, attemptType }) {
    console.log(questionSet,attemptType)
    const data = getData(questionSet);
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