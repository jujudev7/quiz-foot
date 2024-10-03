"use client"; // Ceci est un Client Component

import { usePathname } from "next/navigation";
import { Navbar } from "./components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Liste des routes où tu ne veux pas afficher la Navbar
  const hideNavbarOnPaths = ["/sign-in"];

  // Vérifier si le chemin actuel est dans la liste des chemins où cacher la Navbar
  const shouldHideNavbar = hideNavbarOnPaths.includes(pathname);

  return (
    <>
      <div className="w-full flex justify-center">
        {!shouldHideNavbar && <Navbar className="mt-2" />}
      </div>
      <main>{children}</main>
    </>
  );
}
