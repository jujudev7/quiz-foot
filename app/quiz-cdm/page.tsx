// app/quiz-cdm/page.tsx
import QuizCdm from "../../components/QuizCdm";

export default function QuizCdmPage() {
  return (
    <div className="container mx-auto mt-4 flex w-full flex-col items-center p-4">
      <h1 className="mb-2 text-3xl font-bold text-white">
        Quiz Coupe du monde
      </h1>
      <h2 className="mb-6 text-xl font-bold italic text-sky-500">
        Apprends l&apos;histoire du foot en t&apos;amusant !
      </h2>
      <QuizCdm />
    </div>
  );
}
