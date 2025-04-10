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
  const src =
    direction === "default"
      ? "/icons/arrow-default.svg"
      : "/icons/arrow-diagonal.svg";

  return (
    <Image src={src} alt={alt} className={className} width={24} height={24} />
  );
}
