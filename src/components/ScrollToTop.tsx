import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position to the top on every route change across the app
export const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  // Disable browser's automatic scroll restoration for SPA navigation
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      const previous = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = previous;
      };
    }
  }, []);

  // Scroll to the top-left whenever the route (or query) changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, search]);

  return null;
};
