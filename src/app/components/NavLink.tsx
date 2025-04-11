import NavArrow from "./NavArrow";

type NavLinkProps = {
  direction: "default" | "diagonal";
  alt: string;
  className?: string;
  children: React.ReactNode;
};

export default function NavLink({
  direction = "default",
  alt = "arrow",
  children,
}: NavLinkProps) {
  return (
    <div
      className={`inline-flex justify-center items-center gap-[0.5rem] w-fit`}
    >
      <div className="pb-0.5">
        <NavArrow
          direction={direction}
          alt={alt}
          className={`w-[24px] h-[24px]`}
        />
      </div>
      {children}
    </div>
  );
}
