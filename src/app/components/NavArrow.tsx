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
  const basePath = process.env.BASE_URL
    ? process.env.BASE_URL.replace(/\/+$/, "")
    : "";

  const src =
    direction === "default"
      ? `${basePath}/icons/arrow-default.svg`
      : `${basePath}/icons/arrow-diagonal.svg`;

  return (
    <img src={src} alt={alt} className={className} width={24} height={24} />
  );
}
