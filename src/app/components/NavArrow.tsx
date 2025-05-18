import Image from "next/image";
import config from "../../../next.config.js";

// Simple component to render an arrow icon

type ArrowProps = {
  direction?: "default" | "diagonal";
  alt: string;
  className?: string;
};

export default function NavArrow({
  direction = "default",
  alt = "arrow",
  className = "",
}: ArrowProps) {
  const basePath = config.basePath;

  let src = `${basePath}/icons/arrow-default.png`;
  let imageClass = "arrow object-contain";

  if (direction === "diagonal") {
    src = `${basePath}/icons/arrow-diagonal.png`;
  }

  return (
    <div className={`arrow-container ${className}`}>
      <Image
        src={src}
        alt={alt}
        className={`${imageClass}`}
        fill
        sizes="24px"
      />
    </div>
  );
}
