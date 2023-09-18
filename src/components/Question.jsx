import { useMemo, useState } from "react";
import { shuffleArray } from "../utils"
import { attemptTypes } from "../constants";

function Question({ index, question, attemptType, options, selectionRef }) {
  const [selectedOption, setSelectedOption] = useState();
  const ans = options[0]
  const shuffledOptions = useMemo(() => shuffleArray(options), [])

  const getStyle = (option) => {
    if (attemptType == attemptTypes[0])
      return `${(option == ans) ? "bg-green" : (option == selectedOption) ? "bg-yellow" : ""}`;
    if (attemptType == attemptTypes[1])
      return `${(option == selectedOption) ? (option == ans) ? "bg-green" : "bg-red" : ""}`;
    return `${(option == selectedOption) ? "bg-yellow" : ""}`;
  }

  const handleClick = (option) => {
    setSelectedOption(option)
    if (attemptType == attemptTypes[2]) {
      selectionRef.current = {
          ...selectionRef.current ,
          index: option
      }
    }
  }

  return (
    <li className="question-container">
      <p className="question">{question}</p>
      <ol>
        {shuffledOptions.map((option, index) => {
          return (
            <li key={index} className={getStyle(option)} onClick={() => { handleClick(option) }} >
              {option}
            </li>
          )
        })}
      </ol>
    </li>
  )
}

export default Question