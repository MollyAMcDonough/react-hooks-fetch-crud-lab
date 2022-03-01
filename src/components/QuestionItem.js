import React from "react";

function QuestionItem({ question, handleDeleteQuestion, handleUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
    })
    .then((resp) => resp.json())
    .then(() => handleDeleteQuestion(question))
  }

  function handleCorrectAnswerChange(e) {
    console.log("correctIndex:", e.target.value);
    
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({correctIndex: e.target.value})
    })
    .then((resp) => resp.json())
    .then((data) => handleUpdateQuestion(data))
    
  }
  

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleCorrectAnswerChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
