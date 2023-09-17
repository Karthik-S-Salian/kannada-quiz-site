import { useState, useEffect } from "react";
import { shuffleArray } from "../utils"

function Question(props) {
  const [selectedOption, setSelectedOption] = useState();
  const [options, setOptions] = useState(props.options);
  useEffect(() => {
    setOptions(shuffleArray(options));
  }, [])

  const ans = props.options[0];

  const handleOptionChange = option => {
    setSelectedOption(option)
  };

  let content = ""

  if (props.attemptType == "learn") {
    content = (
      <li className="question-container">
        <p className="question">{props.question}</p>
        <ol>
          {options.map((option, index) => {
            return (
              <li key={index} className={`${option == selectedOption ? "bg-yellow" : ""} ${option == ans ? "bg-green" : ""} `} onClick={() => { handleOptionChange(option) }} >
                {option}
              </li>
            )
          })}
        </ol>
      </li>
    )
  } else if (props.attemptType == "try") {
    content = (
      <li className="question-container">
        <p className="question">{props.question}</p>
        <ol>
          {options.map((option, index) => {
            return (
              <li key={index} className={`${(option == selectedOption) ? (option == ans) ? "bg-green" : "bg-red" : ""} `} onClick={() => { handleOptionChange(option) }} >
                {option}
              </li>
            )
          })}
        </ol>
      </li>
    )
  }

  return content
}

export default Question