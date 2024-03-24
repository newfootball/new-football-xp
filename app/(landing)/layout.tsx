import { CookieConsent } from "@/features/layout/CookieConsent";
import { Footer } from "@/features/layout/Footer";
import { Header } from "@/features/layout/Header";
import { LayoutParams } from "@/lib/next";

export default function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="h-full">
      <Header />
      {props.children}
      <CookieConsent />
      <Footer />
    </div>
  );
}
