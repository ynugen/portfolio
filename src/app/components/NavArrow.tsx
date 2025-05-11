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

  const src =
    direction === "default"
      ? `${basePath}/icons/arrow-default.png`
      : `${basePath}/icons/arrow-diagonal.png`;

  return (
    <div
      className={`relative lg:w-6 md:w-5 aspect-square ${className} min-w-5`}
    >
      <Image
        src={src}
        alt={alt}
        className="arrow object-contain"
        fill
        sizes="24px"
      />
    </div>
  );
}
