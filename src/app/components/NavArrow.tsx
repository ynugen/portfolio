import Image from "next/image";

// Simple component to render an arrow icon

type ArrowProps = {
  direction?: "default" | "diagonal";
  alt: string;
  className?: string;
};

export default function NavArrow({
  direction = "default",
  alt = "arrow",
  className = "arrow",
}: ArrowProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const src =
    direction === "default"
      ? `${basePath}/icons/arrow-default.svg`
      : `${basePath}/icons/arrow-diagonal.svg`;

  return (
    <Image src={src} alt={alt} className={className} width={24} height={24} />
  );
}
