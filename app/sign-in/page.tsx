// app/sign-in/page.tsx
"use client";

import Image from "next/image";

export default function SignInPage() {
  console.log("AUTH_SECRET:", process.env.AUTH_SECRET);
  console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <div className="signin-container rounded-3xl border bg-white p-6 shadow-md sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
        <h1 className="my-6 text-center text-3xl font-bold">
          Connexion à Quiz Foot
        </h1>
        <div className="mx-auto sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-3/5">
          <button className="border-1 mx-auto my-8 flex rounded-full border p-2 text-sm hover:border-slate-600 sm:text-sm lg:text-base">
            <Image
              src="/google.svg"
              alt="logo Google"
              width={24}
              height={24}
              className="mx-2"
              priority
            />
            <span className="mx-2">Se connecter avec Google</span>
          </button>

          {/* <hr className="my-4" /> */}
          <div className="flex items-center">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-600">OU</span>
            <hr className="my-4 flex-grow border-t border-gray-300" />
          </div>
          <form className="w-full">
            <div className="my-6">
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border p-2"
                placeholder="Entrez votre email"
                autoComplete="email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded-md border p-2"
                placeholder="Entrez votre mot de passe"
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="mb-12 mt-4 w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-800"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
