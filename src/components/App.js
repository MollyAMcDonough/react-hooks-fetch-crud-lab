import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);

  useEffect ( () => {
    fetch("http://localhost:4000/questions")
    .then((resp) => resp.json())
    .then((data) => setQuestionList(data))
  }, [])

  function handleAddQuestion(question) {
    setQuestionList([...questionList,question]);
  }

  function handleDeleteQuestion(removedQuestion) {
    const questions = questionList.filter((question) => question.id !== removedQuestion.id);
    setQuestionList(questions);
  }

  function handleUpdateQuestion(updatedQuestion) {
    const questions = questionList.map((question) => {
      if (question.id === updatedQuestion.id) return updatedQuestion;
      return question;
    });
    setQuestionList(questions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddQuestion={handleAddQuestion} /> : <QuestionList questions={questionList} handleDeleteQuestion={handleDeleteQuestion} handleUpdateQuestion={handleUpdateQuestion} />}
    </main>
  );
}

export default App;
