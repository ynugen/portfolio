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
}: ArrowProps) {
  const basePath = config.basePath;

  const src =
    direction === "default"
      ? `${basePath}/icons/arrow-default.png`
      : `${basePath}/icons/arrow-diagonal.png`;

  return <Image src={src} alt={alt} className="arrow" width={16} height={16} />;
}
