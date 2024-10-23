// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto 2xl w-full p-4 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold my-2">Quiz Football</h1>
      <h2 className="italic font-bold text-xl text-sky-500 mb-6">
        Apprends l&apos;histoire du foot tout en t&apos;amusant !
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-4 mb-6">
          <Link href="/quiz-l1">
            <h3 className="text-center font-bold text-xl mb-2">Quiz Ligue 1</h3>
            <Image
              src="/covers/ligue_1_cover.jpg"
              alt="logo L1"
              width={390}
              height={260}
              className="cursor-pointer rounded-xl border-4 hover:invert"
              priority
            />
          </Link>
          <Link href="/quiz-cdf">
            <h3 className="text-center font-bold text-xl mb-2">
              Quiz Coupe de France
            </h3>
            <Image
              src="/covers/coupe_de_france_cover.jpg"
              alt="logo Coupe de France"
              width={390}
              height={260}
              className="cursor-pointer rounded-xl border-4 border-sky-900 hover:invert"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-4 mb-6">
          <Link href="/quiz-c1">
            <h3 className="text-center font-bold text-xl mb-2">
              Quiz Ligue des Champions
            </h3>
            <Image
              src="/covers/champions_league_cover.jpg"
              alt="logo Ligue des Champions"
              width={390}
              height={260}
              className="cursor-pointer rounded-xl border-4 border-sky-900 hover:invert"
              priority
            />
          </Link>
          <Link href="/quiz-cdm">
            <h3 className="text-center font-bold text-xl mb-2">
              Quiz Coupe du monde
            </h3>
            <Image
              src="/covers/coupe_du_monde_cover.jpg"
              alt="logo Coupe du monde"
              width={390}
              height={260}
              className="cursor-pointer rounded-xl border-4 hover:invert"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
