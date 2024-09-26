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
        <div className="score-section text-2xl text-center w-full rounded-md bg-cyan-200 p-4 space-y-4">
          Ton score est de{" "}
          <strong>
            {score} / {questions.length}
          </strong>
          <div className="assessment text-lg">
            {score >= 9 ? (
              <>
                <p className="font-bold">Bravo 👏👏👏</p>
                <p>La Ligue 1 n&apos;a presque plus aucun secret pour toi !</p>
              </>
            ) : score >= 7 ? (
              <>
                <p className="font-bold">Pas mal 👍</p>
                <p>
                  Tu as de bonnes connaissances sur le Championnat de France,
                  mais tu peux encore t&apos;améliorer !
                </p>
              </>
            ) : score >= 5 ? (
              <>
                <p className="font-bold">Ça passe 😊</p>
                <p>
                  Intermittent du spectacle. Tu suis le foot, mais tu pourrais
                  être plus assidu !
                </p>
              </>
            ) : score >= 3 ? (
              <>
                <p className="font-bold">Aïe 😬</p>
                <p>
                  Pas la moyenne... Tu as encore beaucoup à apprendre sur le
                  Championnat de France !
                </p>
              </>
            ) : (
              <>
                <p className="font-bold">Catastrophique 🤦‍♀️</p>
                <p>T&apos;as déjà vu un match de foot ?</p>
              </>
            )}
          </div>
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
