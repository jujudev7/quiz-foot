import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
};

interface User {
  id: string;
  name: string | null;
}

const users = await prisma.user.findMany();

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  if (user.role !== "admin") {
    return (
      <main className="mx-auto my-10 text-white">
        <p className="text-center">
          Vous n&apos;êtes pas autorisé à voir page.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto my-10 space-y-3 text-white">
      <h1 className="text-center text-xl font-bold">Admin Page</h1>
      <p className="text-center">Bienvenue admin !</p>
      <h2 className="text-center text-2xl font-semibold">Users</h2>
      <ul className="list-inside list-disc">
        {users.map((user: User) => (
          <li key={user.id} className="text-center">
            <Link href={`/user/${user.id}`} className="hover:underline">
              {user.name || `User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
