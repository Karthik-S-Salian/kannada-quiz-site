import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import MCQList from './components/MCQList';
import GithubCorner from './components/GithubCorner';

const validAttemptType = ["learn", "try","test"]
const validKannadaType = ["balake", "samskrutika"]

function App() {
  const [kannadaType, setKannadaType] = useState(null);
  const [attemptType, setAttemptType] = useState(null);

  function onKannadaTypeSelection(kannadaType) {
    setKannadaType(kannadaType)
  }

  function onAttemptTypeSelection(attemptType) {
    setAttemptType(attemptType)
  }

  let content = ""

  if (!validKannadaType.includes(kannadaType)) {
    content = (
      <>
        <Card
          title="Balake Kannada"
          description=""
          handleClick={() => { onKannadaTypeSelection(validKannadaType[0]) }}
        />

        <Card
          title="Samskruthika Kannada"
          description=""
          handleClick={() => { onKannadaTypeSelection(validKannadaType[1]) }}
        />
      </>

    )
  } else if (!validAttemptType.includes(attemptType)) {
    content = (
      <>
        <Card
          title="Learner"
          description="correct answer will be displayed in green"
          handleClick={() => { onAttemptTypeSelection(validAttemptType[0]) }}
        />

        <Card
          title="Intermediate"
          description="correct answer is shown after selecting option"
          handleClick={() => { onAttemptTypeSelection(validAttemptType[1]) }}
        />

      {/* <Card
          title="Expert"
          description="write a test of 40 random question in 20 minutes"
          handleClick={() => { onAttemptTypeSelection(validAttemptType[2]) }}
        /> */}
      </>

    )
  } else {
      content=(<MCQList 
        isBalake={kannadaType==validKannadaType[0]}
        attemptType={attemptType}
        />)

  }

  return (
    <main>
        <GithubCorner/>
        {content}
    </main>
  )
}

export default App

