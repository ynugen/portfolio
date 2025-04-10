import NavArrow from "./NavArrow";

type NavLinkProps = {
  direction: "default" | "diagonal";
  alt: string;
  className?: string;
  linkString?: string;
};

export default function NavLink({
  direction = "default",
  alt = "arrow",
  className = "",
  linkString = "Link",
}: NavLinkProps) {
  return (
    <div className="inline-flex justify-center items-center gap-[0.3125rem] subtitle-2">
      <div className="pb-1">
        <NavArrow
          direction={direction}
          alt={alt}
          className={`w-[24px] h-[24px] ${className}`}
        />
      </div>

      {linkString}
    </div>
  );
}
