// app/quiz-l1/page.tsx
import QuizL1 from "../../components/QuizL1";

export default function QuizL1Page() {
  return (
    <div className="container mx-auto mt-4 flex w-full flex-col items-center p-4">
      <h1 className="mb-2 text-3xl font-bold text-white">Quiz Ligue 1</h1>
      <h2 className="mb-6 text-xl font-bold italic text-sky-500">
        Apprends l&apos;histoire du foot en t&apos;amusant !
      </h2>
      <QuizL1 />
    </div>
  );
}
