import { useState, useEffect } from 'react'
import './App.css'
import GithubCorner from './components/GithubCorner';
import { attemptTypes, questionSets } from "./constants";
import KannadaSelection from './components/KannadaSelection';
import AttemptSelection from './components/AttemptSelection';
import McqPage from './components/McqPage';
import Navbar from './components/Navbar';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';


function App() {
  const [questionSet, setQuestionSet] = useState(questionSets[0]);
  const [attemptType, setAttemptType] = useState(attemptTypes[0]);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <>
      <GithubCorner />
      <Navbar questionSet={questionSet} attemptType={attemptType} />
      <main>
        <Routes>
          <Route path="/" element={<KannadaSelection handleClick={setQuestionSet} />} />
          <Route path="/attempt" element={<AttemptSelection handleClick={setAttemptType} />} />
          <Route path="/mcqs" element={<McqPage questionSet={questionSet} attemptType={attemptType}/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </>
  )
}

export default App

