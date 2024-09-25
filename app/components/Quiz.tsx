"use client";

import { useState } from "react";
import questions from "../data/questions"; // Importation des questions
import Question from "./Question"; // Composant pour afficher la question

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerOptionClick = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(selectedAnswer); // Met à jour la réponse sélectionnée
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null); // Réinitialise la sélection ici
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz w-1/2 flex justify-center">
      {showScore ? (
        <div className="score-section">
          Vous avez obtenu {score} sur {questions.length}
        </div>
      ) : (
        <Question
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
          handleAnswer={handleAnswerOptionClick}
          handleNextQuestion={handleNextQuestion}
          selectedAnswer={selectedAnswer} // Passe la réponse sélectionnée
        />
      )}
    </div>
  );
};

export default Quiz;
