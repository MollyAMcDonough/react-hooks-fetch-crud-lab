import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDeleteQuestion, handleUpdateQuestion}) {
  const questionsJsx = questions.map((question) => <QuestionItem key={question.id} question={question} handleDeleteQuestion={handleDeleteQuestion} handleUpdateQuestion={handleUpdateQuestion} />);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsJsx}</ul>
    </section>
  );
}

export default QuestionList;
