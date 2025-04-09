// Simple component to display navigation arrows

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
  const src =
    direction === "default"
      ? "/icons/arrow-default.svg"
      : "/icons/arrow-diagonal.svg";
  return <img src={src} alt={alt} className={className} />;
}
