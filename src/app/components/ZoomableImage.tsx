"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Import the lightbox styles
import "yet-another-react-lightbox/styles.css";

interface ZoomableImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  bgColor?: string;
}

export default function ZoomableImage({
  src,
  width,
  height,
  alt,
  className,
  bgColor = "#f5f5f5",
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{ cursor: "zoom-in", display: "inline-block", maxWidth: width }}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(true);
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src }]}
        plugins={[Zoom]}
        styles={{
          slide: { backgroundColor: bgColor },
          container: { backgroundColor: "#353535" },
        }}
      />
    </>
  );
}
