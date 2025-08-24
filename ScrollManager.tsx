import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If navigating to a hash on the same page, scroll to that element smoothly
   if (hash) {
      // wait a tick for the new page to paint
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Accessibility: move focus to the target
        (el as HTMLElement).tabIndex = -1;
        (el as HTMLElement).focus();
        return;
      }
    }
    // Default: always reset to top on route (pathname/key) change
    if ("scrollRestoration" in history) {
      // Disable browser's automatic restoration so we control it
      (history as any).scrollRestoration = "manual";
    }
    // Reset both root and body scroll positions (covers all browsers)
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, key, hash]);

  return null;
}