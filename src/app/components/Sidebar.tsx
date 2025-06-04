import styles from "@/app/styles/Sidebar.module.css";
import NavLink from "./NavLink";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import config from "../../../next.config.js";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/links";
import { useEffect, useState } from "react";
import type { NavLinkProps } from "../data/links";

const basePath = config.basePath;

interface SidebarLink {
  href: string;
  label: string;
  color: string;
}

const SidebarLinkSection: React.FC<NavLinkProps> = ({
  links,
  direction,
  pathname,
}) => (
  <div
    className={
      direction === "diagonal" ? styles.contactLinks : styles.pageLinks
    }
  >
    {links.map((link: SidebarLink) => (
      <NavLink key={link.href} direction={direction} alt="arrow">
        <h3>
          <Link
            href={link.href}
            className="link"
            style={{
              textShadow:
                pathname === link.href
                  ? `calc(var(--square-size) * 0.02) 0px 0px ${link.color}`
                  : "var(--slate-grey)",
              color: "var(--slate-grey)",
              transition: "text-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textShadow = `calc(var(--square-size) * 0.02) 0px 0px ${link.color}`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textShadow =
                pathname === link.href
                  ? `calc(var(--square-size) * 0.02) 0px 0px ${link.color}`
                  : "none")
            }
          >
            {link.label}
          </Link>
        </h3>
      </NavLink>
    ))}
  </div>
);

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [handleClick, setHandleClick] = useState<(() => void) | null>(null);
  const [isProjectPage, setIsProjectPage] = useState(false);

  useEffect(() => {
    setHandleClick(() => () => {
      window.location.href = `${basePath}${navLinks.contact[0].href}`;
    });
    const segments = window.location.pathname.split("/").filter(Boolean);
    setIsProjectPage(segments.length >= 2);
  }, []);

  return (
    <div
      className={`${styles.sidebarWrapper}`}
      style={{
        borderBottom: "var(--slate-grey) 1px solid",
        borderLeft: "var(--slate-grey) 1px solid",
      }}
    >
      {isProjectPage ? (
        <div className={styles.sidebarCollapsed}>
          <div className={`title-11 grey flex ${styles.verticalNameContainer}`}>
            <Title
              className="title-11 flex"
              color="var(--marigold)"
              isVertical={true}
            >
              <Link href="/">
                <h1>AYIMA</h1>
              </Link>
            </Title>
          </div>
          <div className={styles.navContainer}>
            <SidebarLinkSection
              links={navLinks.main}
              direction="default"
              pathname={pathname}
            />
            <SidebarLinkSection
              links={navLinks.contact}
              direction="diagonal"
              pathname={pathname}
            />
          </div>
        </div>
      ) : (
        <div className={styles.sidebarExpanded}>
          <div className={styles.titleContainer}>
            <div
              className="scrolling-container"
              onClick={handleClick ?? undefined}
              style={{ cursor: "pointer" }}
            >
              <span
                className="scrolling-text body grey"
                style={{ cursor: "pointer" }}
              >
                NGUYEN MT A. (AKA <span className="body-b">AYIMA</span>) IS AN
                ASPIRING{" "}
                <span className="body-bi">
                  CREAT<span className="body-b">IV</span>E
                </span>
                ,{" "}
                <span className="body-b">
                  <span className="body-bi">DESIGN</span>ER
                </span>{" "}
                , AND{" "}
                <span className="body-b">
                  SOFTWARE <span className="body-bi">CRAFT</span>SMAN
                </span>{" "}
                BASED in MELBOURNE, AUSTRALIA. NGUYEN MT A. (AKA{" "}
                <span className="body-b">AYIMA</span>) IS AN ASPIRING{" "}
                <span className="body-bi">
                  CREAT<span className="body-b">IV</span>E
                </span>
                ,{" "}
                <span className="body-b">
                  <span className="body-bi">DESIGN</span>ER
                </span>{" "}
                , AND{" "}
                <span className="body-b">
                  SOFTWARE <span className="body-bi">CRAFT</span>SMAN
                </span>{" "}
                BASED in MELBOURNE, AUSTRALIA.
              </span>
            </div>
            <div className={`title-1 grey flex ${styles.nameContainer}`}>
              <Title className="title-1 flex" color="var(--marigold)">
                <Link href="/">
                  <h1>AYIMA</h1>
                </Link>
              </Title>
            </div>
            <div
              className={styles.imageContainer}
              style={{ overflow: "hidden" }}
            >
              <Image
                src={`${basePath}/images/lovely.png`}
                alt="Profile picture"
                objectFit="cover"
                layout="responsive"
                height={200}
                width={200}
              />
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.aboutContainer}>
              <div className={styles.imageContainer}>
                <Image
                  src={`${basePath}/images/lovely.png`}
                  alt="Motion graphic"
                  objectFit="cover"
                  layout="responsive"
                  height={200}
                  width={200}
                />
              </div>
              <div className="body-small text-justify grey">
                I&apos;ve been orbiting around design my entire life - realised
                it as an afterthought and not a possibility. But time is much
                too a fickle thing for me to mull and ponder over if
                only&apos;s. Imagination should be brought to life. Welcome to
                my collection of all things - lost and little - that I&apos;ve
                curated across my years.
              </div>
            </div>
            <div className={styles.navContainer}>
              <SidebarLinkSection
                links={navLinks.main}
                direction="default"
                pathname={pathname}
              />
              <SidebarLinkSection
                links={navLinks.contact}
                direction="diagonal"
                pathname={pathname}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
