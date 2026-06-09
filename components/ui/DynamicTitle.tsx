"use client";

import { useEffect } from "react";

export default function DynamicTitle() {
  useEffect(() => {
    let originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Save the original title just in case it was updated by routing
        originalTitle = document.title;
        document.title = "Psshh 👋";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
