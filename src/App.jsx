import React from 'react'
import FlashCards from './FlashCards'
import { useState } from 'react';

function App() {

  const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
    }
  ];

  const [selectedId, setSelectedId] = useState(null);
     
   const handleSelect = (id) => {
    setSelectedId( id !== selectedId ? id : null) 
   }

  return (
  <>
      <h1 className="app-title">React Flashcards</h1>
      <p className="app-subtitle">Click on cards to reveal answers</p>
    <div className="flashcards">
      {
        questions.map((q) => 
          (<FlashCards
             key={q.id} 
             questions={q} 
             isSelected={q.id === selectedId}
             handleSelected={handleSelect}
             />)
        )
      }
    </div>
  </>
  )
}

export default App
