// app/sign-in/page.tsx
import SignIn from "../components/sign-in";

export default function SignInPage() {
  return (
    <div className="w-full p-4 flex items-center justify-center h-screen flex-col bg-gradient-to-r from-slate-950 to-indigo-500 ">
      <SignIn />
    </div>
  );
}
