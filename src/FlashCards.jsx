import { useState } from "react";



function FlashCards({questions}) {

    const [clicked, setClicked] = useState(false);
     
     

    console.log(questions)
  return (
  
    <div onClick={() => setClicked(!clicked)}  className={clicked ? "selected" : "flashcard"}>
        {clicked ? questions.answer : questions.question}
    </div>
  )
}

export default FlashCards
