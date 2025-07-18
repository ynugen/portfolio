"use client";
import { useEffect, useRef, useState } from "react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

export default function Title({
  children,
  className = "title-1 flex h-[6.5rem]",
  color = "var(--peach)",
}: TitleProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [shadowStyle, setShadowStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!titleRef.current) return;

      // Get the bounding container of title element
      const rect = titleRef.current.getBoundingClientRect();

      // Calculate center of the title box
      const centerX = rect.left + rect.width / 2;

      // Calculate the offset of the mouse position from the center of the title box
      // Only offset the shadow in the x direction based on cursor position
      let offsetX = (event.clientX - centerX) / 20;

      // Dynamically set the maximum offset based on my golden ratio unit square size
      const squareSize = Math.min(
        window.innerHeight / 5,
        window.innerWidth / 8
      );

      const maxOffset = squareSize * 0.06;
      // Limit the offset to a maximum of 11 pixels (or depending on the title font size so that it doesn't look weird)
      if (offsetX > maxOffset) {
        offsetX = maxOffset;
      } else if (offsetX < -maxOffset) {
        offsetX = -maxOffset;
      }

      setShadowStyle({
        textShadow: `${offsetX}px 0px 0px ${color}`,
      });
    };

    if (window.innerWidth > 768) {
      // Mouse movement event listener
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        // Cleanup function to remove the event listener
        window.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      // For mobile, set a fixed shadow style
      setShadowStyle({
        textShadow: `8px 0px 0px ${color}`,
      });
    }
  }, [color]);

  return (
    <div ref={titleRef} className={className} style={shadowStyle}>
      {children}
    </div>
  );
}
