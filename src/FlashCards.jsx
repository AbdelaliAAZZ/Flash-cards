import { useState } from "react";



function FlashCards({questions}) {

    const [hovered, setHovered] = useState(false);
     

    console.log(questions)
  return (
  
    <div onClick={() => setHovered(!hovered)}  className={hovered ? "selected" : "flashcard"}>
        {hovered ? questions.answer : questions.question}
    </div>
  )
}

export default FlashCards
