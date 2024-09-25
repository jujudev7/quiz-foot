import { ArrowRight } from "lucide-react";
import { useState } from "react";

type QuestionProps = {
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  };
  currentQuestion: number;
  totalQuestions: number;
  handleAnswer: (selectedAnswer: string) => void;
};

const Question = ({
  question,
  currentQuestion,
  totalQuestions,
  handleAnswer,
}: QuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleClick = (option: string) => {
    setSelectedAnswer(option); // Met à jour la réponse sélectionnée
    console.log("Réponse sélectionnée:", option); // Log de la réponse sélectionnée
    handleAnswer(option); // Notifie le parent avec la réponse sélectionnée
  };

  return (
    <div className="question-section w-full rounded-md bg-yellow-300 p-4 space-y-4">
      <div className="question-count">
        <span className="italic">Question {currentQuestion}</span>/
        {totalQuestions}
      </div>
      <div className="question-text font-bold text-lg">{question.question}</div>

      <div className="answer-section grid grid-cols-2 gap-4 pb-4">
        {question.options.map((option, index) => {
          let bgColor = "bg-blue-500"; // Couleur par défaut

          // Lorsque l'utilisateur a cliqué sur une réponse
          if (selectedAnswer) {
            // Si l'option est la bonne réponse, on la met en vert
            if (option === question.correctAnswer) {
              bgColor = "bg-emerald-500";
            } else if (option === selectedAnswer) {
              // Si l'option cliquée est incorrecte, on la met en rouge
              bgColor = "bg-rose-600";
            }
          }

          return (
            <button
              key={index}
              className={`${bgColor} text-white text-lg px-4 py-6 rounded-md ${
                !selectedAnswer ? "hover:bg-fuchsia-500" : ""
              }`}
              onClick={() => handleClick(option)}
              disabled={!!selectedAnswer} // Désactiver les boutons après sélection
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Affiche l'explication uniquement si une réponse a été sélectionnée */}
      {selectedAnswer && (
        <div className="explanation mt-4">{question.explanation}</div>
      )}

      <div className="flex justify-end mt-4">
        <button
          className="rounded bg-black text-white px-3 py-2 hover:bg-slate-800"
          disabled={!selectedAnswer} // Désactive le bouton tant qu'aucune réponse n'est sélectionnée
        >
          <div className="flex flex-row gap-1">
            Prochaine question <ArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Question;
