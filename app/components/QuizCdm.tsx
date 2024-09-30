"use client";

import Image from "next/image";
import { useState } from "react";
import questions from "../data/cdm"; // Importation des questions
import Question from "./Question"; // Composant pour afficher la question

const QuizCdm = () => {
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
                <p>
                  La Coupe du monde n&apos;a presque plus aucun secret pour toi
                  !
                </p>
                <Image
                  className="mx-auto my-4"
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTMwdTEzOGIwcmRuOWZ2NXkybmp4MmUwN3BvNHpwYmEzcGlvdnAybyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TjAcxImn74uoDYVxFl/giphy.webp"
                  alt="goat"
                  width={416}
                  height={340}
                />
              </>
            ) : score >= 7 ? (
              <>
                <p className="font-bold">Pas mal 👍</p>
                <p>
                  Tu as de bonnes connaissances sur la Coupe du monde, mais tu
                  peux encore t&apos;améliorer !
                </p>
                <Image
                  className="mx-auto my-4"
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVrd3U1OXdydngwcXNodzFhemlyMWM3a2NoNjZ5NjJ4M3hqOWhlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Cef5DtHvUvXHIl64y/giphy.webp"
                  alt="bravo"
                  width={416}
                  height={340}
                />
              </>
            ) : score >= 5 ? (
              <>
                <p className="font-bold">Ça passe 😊</p>
                <p>
                  Intermittent du spectacle. Tu suis le foot, mais tu pourrais
                  être plus assidu !
                </p>
                <Image
                  className="mx-auto my-4"
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXc3Ynhvd3c5ZnhibDJ4eDUyZGM2YnI5ZTV6YnMzN3V0bWFuY3ByeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9xijGdDIMovchalhxN/giphy.webp"
                  alt="moyen"
                  width={416}
                  height={340}
                />
              </>
            ) : score >= 3 ? (
              <>
                <p className="font-bold">Aïe 😬</p>
                <p>
                  Pas la moyenne... Tu as encore beaucoup à apprendre sur la
                  Coupe du monde !
                </p>
                <Image
                  className="mx-auto my-4"
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHN4ZWZmNnAxN3Joejkwa3B2enIyMGQ3Z2w2d3M1cTZoNTBmaWM0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qZ6AT9D7Lc1Y8x1LPk/giphy.webp"
                  alt="travaille"
                  width={416}
                  height={340}
                />
              </>
            ) : (
              <>
                <p className="font-bold">Catastrophique 🤦‍♀️</p>
                <p>T&apos;as déjà vu un match de foot ?</p>
                <Image
                  className="mx-auto my-4"
                  src="https://media1.tenor.com/m/_wNZAVN0DpsAAAAC/soccer-soccer-ball.gif"
                  alt="fail"
                  width={416}
                  height={340}
                />
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

export default QuizCdm;
