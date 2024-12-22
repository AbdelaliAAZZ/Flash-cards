

function FlashCards({questions , handleSelected, isSelected}) {

    
    
  return (
  
    <div onClick={() => handleSelected(questions.id)}  className={isSelected ? "selected" : "flashcard"}>
        {isSelected ? questions.answer : questions.question}
    </div>
  )
}

export default FlashCards
