// app/admin/quizzes/page.tsx
"use client";

import QuizForm from "@/app/admin/components/QuizForm";
import { useEffect, useState } from "react";

const QuizzesAdmin = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Charger les quizzes depuis un fichier JSON ou une API
    const loadQuizzes = async () => {
      const response = await fetch("/quizzes.json");
      const data = await response.json();
      setQuizzes(data);
    };

    loadQuizzes();
  }, []);

  const handleAddQuiz = (newQuiz) => {
    setQuizzes((prevQuizzes) => [
      ...prevQuizzes,
      { id: prevQuizzes.length + 1, ...newQuiz },
    ]);
    // Enregistrer le quiz dans une API ou une base de données ici.
  };

  const handleDeleteQuiz = (id: number) => {
    setQuizzes((prevQuizzes) => prevQuizzes.filter((quiz) => quiz.id !== id));
  };

  const [editingQuiz, setEditingQuiz] = useState<null | {
    id: number;
    title: string;
    category: string;
    difficulty: string;
  }>(null);

  const handleEditQuiz = (id: number) => {
    const quizToEdit = quizzes.find((quiz) => quiz.id === id);
    if (quizToEdit) {
      setEditingQuiz(quizToEdit);
    }
  };

  const handleUpdateQuiz = (updatedQuiz) => {
    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((quiz) =>
        quiz.id === editingQuiz.id ? { ...quiz, ...updatedQuiz } : quiz
      )
    );
    setEditingQuiz(null); // Réinitialiser l'état de modification
  };

  return (
    <div className="container mx-auto p-4 md:w-2/3 sm:w-full">
      <h1 className="text-2xl font-bold mb-4">Gestion des Quiz</h1>
      <QuizForm
        onSubmit={editingQuiz ? handleUpdateQuiz : handleAddQuiz}
        initialData={editingQuiz}
      />
      <ul className="mt-4">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="flex justify-between items-center">
            {quiz.title}
            <div>
              <button
                onClick={() => handleEditQuiz(quiz.id)}
                className="text-sm text-black bg-yellow-400 rounded hover:bg-yellow-500 px-2 py-1 mb-1"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeleteQuiz(quiz.id)}
                className="text-sm text-white bg-red-500 rounded hover:bg-red-700 px-2 py-1 mb-1 ml-2"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizzesAdmin;
