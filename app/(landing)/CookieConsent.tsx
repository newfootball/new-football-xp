"use client";

import { Button } from "@/components/ui/button";
import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

export const COOKIE_CONSENT = "cookie-consent";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie(COOKIE_CONSENT));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie(COOKIE_CONSENT, "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 bg-slate-700/70">
      <div className="fixed inset-x-0 bottom-0 mx-2 mb-20 flex items-center justify-between rounded-sm bg-gray-100 px-4 py-8">
        <span className="mr-16 text-base">
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our Cookie
          Policy.
        </span>
        <Button
          variant="default"
          className="rounded bg-green-500 px-8 py-2 text-white"
          onClick={() => acceptCookie()}
        >
          Accept
        </Button>
      </div>
    </div>
  );
};
