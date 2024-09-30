// app/quiz-cdf/page.tsx
import QuizCdf from "../components/QuizCdf";

export default function QuizCdfPage() {
  return (
    <div className="container mx-auto w-full p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Quiz Coupe de France</h1>
      <h2 className="italic font-bold text-xl text-sky-500 mb-6">
        Apprends l&apos;histoire du foot tout en t&apos;amusant !
      </h2>
      <QuizCdf />
    </div>
  );
}
