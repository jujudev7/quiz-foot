// app/admin/components/QuizForm.tsx
import React, { useEffect, useState } from "react";

interface QuizFormProps {
  onSubmit: (quiz: {
    title: string;
    category: string;
    difficulty: string;
  }) => void;
  initialData?: { title: string; category: string; difficulty: string };
}

const QuizForm: React.FC<QuizFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [difficulty, setDifficulty] = useState(
    initialData?.difficulty || "easy"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, category, difficulty });
    // Réinitialiser le formulaire après soumission
    setTitle("");
    setCategory("");
    setDifficulty("easy");
  };

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setCategory(initialData.category);
      setDifficulty(initialData.difficulty);
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre du quiz"
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Catégorie"
        className="border p-2 rounded"
        required
      />
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="easy">Facile</option>
        <option value="medium">Moyen</option>
        <option value="hard">Difficile</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-4"
      >
        {initialData ? "Modifier le Quiz" : "Ajouter le Quiz"}
      </button>
    </form>
  );
};

export default QuizForm;
