import { CookieConsent } from "./CookieConsent";
import { Footer } from "./Footer";
import { Header } from "./Header";
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
