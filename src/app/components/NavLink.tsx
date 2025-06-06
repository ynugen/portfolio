import NavArrow from "./NavArrow";

type NavLinkProps = {
  direction: "default" | "diagonal" | "back";
  alt?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function NavLink({
  direction = "default",
  alt = "arrow",
  className = "",
  children,
}: NavLinkProps) {
  return (
    <div
      className={`inline-flex justify-center items-center gap-[0.5rem] w-fit`}
    >
      <div className="">
        <NavArrow direction={direction} alt={alt} className={`${className}`} />
      </div>
      {children}
    </div>
  );
}
