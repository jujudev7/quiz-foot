// app/page.tsx
import QuizCdf from "./components/QuizCdf";
import QuizL1 from "./components/QuizL1";

export default function Home() {
  return (
    <div className="container mx-auto w-full p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Quiz React avec Next.js</h1>
      <QuizL1 />
      <QuizCdf />
    </div>
  );
}
