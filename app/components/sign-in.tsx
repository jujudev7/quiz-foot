// app/components/sign-in.tsx
"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="signin-container 2xl:w-1/3 xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-2/3 rounded-3xl bg-white border p-6 shadow-md">
      <h1 className="text-3xl text-center font-bold my-6">
        Connexion à Quiz Foot
      </h1>
      <div className="xl:w-3/5 lg:w-3/5 md:w-2/3 sm:w-3/4 mx-auto">
        <button
          onClick={() => signIn("google")}
          className="flex mx-auto rounded-full lg:text-base sm:text-sm text-sm p-2 border border-1 hover:border-slate-600 my-8"
        >
          <Image
            src="/google.svg"
            alt="logo Google"
            width={24}
            height={24}
            className="mx-2"
          />
          <span className="mx-2">Se connecter avec Google</span>
        </button>
        {/* <hr className="my-4" /> */}
        <div class="flex items-center">
          <hr class="flex-grow border-t border-gray-300" />
          <span class="mx-4 text-gray-600">OU</span>
          <hr class="flex-grow border-t border-gray-300 my-4" />
        </div>
        <form className="w-full">
          <div className="my-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              placeholder="Entrez votre email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md"
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-800 text-white py-2 rounded-md mb-12"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
