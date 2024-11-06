"use server";

import { signIn as signInProvider } from "@/auth";

export async function signIn() {
  await signInProvider();
}
