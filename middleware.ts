import { auth } from "@/auth/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { toast } from "sonner";

// Liste des chemins qui ne nécessitent pas d'authentification
const protectedPaths = ["/dashboard", "/profile", "/post/new"];

export async function middleware(request: NextRequest) {
  // Vérifier si le chemin actuel nécessite une authentification
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!isProtectedPath) {
    toast("You are not authorized to access this page");
    // Si ce n'est pas un chemin protégé, on laisse passer sans vérification
    return NextResponse.next();
  }

  // Pour les chemins protégés, on vérifie l'authentification
  const session = await auth();

  if (!session) {
    // Rediriger vers la page de connexion si pas de session
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Attacher la session à la requête pour une utilisation ultérieure
  const response = NextResponse.next();
  response.headers.set("x-session", JSON.stringify(session));

  return response;
}

// Configurer le middleware pour s'exécuter sur toutes les routes sauf les fichiers statiques
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
