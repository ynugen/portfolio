"use client";
import { useEffect } from "react";

// Dynamically calculates my CSS variables based on window size

export default function DynamicCSS() {
  useEffect(() => {
    const updateVars = () => {
      const squareSize = Math.min(
        window.innerHeight / 5,
        window.innerWidth / 8
      );

      if (window.innerWidth > 768) {
        document.documentElement.style.setProperty(
          "--square-size",
          `${squareSize}px`
        );
        document.documentElement.style.setProperty(
          "--title-font-size",
          `${squareSize * 0.463768116}px`
        );
      }
    };

    window.addEventListener("resize", updateVars);
    updateVars();

    return () => window.removeEventListener("resize", updateVars);
  }, []);
  return null;
}
