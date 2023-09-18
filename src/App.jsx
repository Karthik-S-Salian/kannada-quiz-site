import { useState, useEffect } from 'react'
import './App.css'
import GithubCorner from './components/GithubCorner';
import { attemptTypes, kannadaTypes } from "./constants";
import KannadaSelection from './components/KannadaSelection';
import AttemptSelection from './components/AttemptSelection';
import McqPage from './components/McqPage';
import Navbar from './components/Navbar';
import Exam from './components/Exam';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';


function App() {
  const [kannadaType, setKannadaType] = useState(kannadaTypes[0]);
  const [attemptType, setAttemptType] = useState(attemptTypes[0]);
  const navigate = useNavigate();
  console.log("rendering")

  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <>
      <GithubCorner />
      <Navbar kannadaType={kannadaType} attemptType={attemptType} />
      <main>
        <Routes kannadaType={kannadaType} attemptType={attemptType}>
          <Route path="/" element={<KannadaSelection handleClick={setKannadaType} />} />
          <Route path="/attempt" element={<AttemptSelection handleClick={setAttemptType} />} />
          <Route path="/mcqs" element={<McqPage kannadaType={kannadaType} attemptType={attemptType} />} />
          <Route path="/test" element={<Exam kannadaType={kannadaType} attemptType={attemptType} />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </>
  )
}

export default App

