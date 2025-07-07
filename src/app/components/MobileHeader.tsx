import styles from "@/app/styles/MobileHeader.module.css";
import NavLink from "./NavLink";
import Title from "./Title";
import Link from "next/link";
import config from "../../../next.config.js";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/links";
import { useEffect, useState } from "react";

const basePath = config.basePath;

const MobileHeader: React.FC = () => {
  const pathname = usePathname();
  const [handleClick, setHandleClick] = useState<(() => void) | null>(null);

  useEffect(() => {
    setHandleClick(() => () => {
      window.location.href = `${basePath}${navLinks.contact[0].href}`;
    });
  }, []);
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        {/* Scrolling container */}
        <div
          className={`scrolling-container grey`}
          onClick={handleClick ?? undefined}
          style={{ cursor: "pointer" }}
        >
          <span
            className={`scrolling-text body grey`}
            style={{ cursor: "pointer" }}
          >
            NGUYEN MT A. (AKA <span className="body-b">AYIMA</span>) IS AN
            ASPIRING{" "}
            <span className="body-bi">
              CREAT
              <span className="body-b">IV</span>E
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
              CREAT
              <span className="body-b">IV</span>E
            </span>
            ,{" "}
            <span className="body-b">
              <span className="body-bi">DESIGN</span>ER
            </span>{" "}
            , AND{" "}
            <span className="body-b">
              SOFTWARE <span className="body-bi">CRAFT</span>SMAN
            </span>{" "}
            BASED in MELBOURNE, AUSTRALIA.{" "}
          </span>
        </div>

        <div className="flex">
          {/* Title text */}
          <div className={`title-1 grey flex ${styles.nameContainer}`}>
            <Title className="title-1 flex" color="var(--peach)">
              <Link href="/">
                <h1>AYIMA</h1>
              </Link>
            </Title>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex justify-center">
        <div className={styles.linksContainer}>
          {navLinks.main.map((link) => (
            <NavLink key={link.href} direction="default" alt="arrow">
              <h3>
                <Link
                  href={link.href}
                  className="link"
                  style={{
                    textShadow:
                      pathname === link.href
                        ? `calc(var(--square-size-m) * 0.02) 0px 0px ${link.color}`
                        : "var(--slate-grey)",
                    color: `var(--slate-grey)`,
                    transition: "text-shadow 0.3s ease", // Add transition for smooth animation
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textShadow = `calc(var(--square-size-m) * 0.02) 0px 0px ${link.color}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textShadow =
                      pathname === link.href
                        ? `calc(var(--square-size-m) * 0.02) 0px 0px ${link.color}`
                        : "none")
                  }
                >
                  {link.label}
                </Link>
              </h3>
            </NavLink>
          ))}

          {navLinks.contact.map((link) => (
            <NavLink key={link.href} direction="diagonal" alt="arrow">
              <h3>
                <Link
                  href={link.href}
                  className={`link`}
                  style={{
                    textShadow:
                      pathname === link.href
                        ? `calc(var(--square-size-m) * 0.02) 0px 0px ${link.color}`
                        : "var(--slate-grey)",
                    color: `var(--slate-grey)`,
                    transition: "text-shadow 0.3s ease", // Add transition for smooth animation
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textShadow = `calc(var(--square-size-m) * 0.02) 0px 0px ${link.color}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textShadow =
                      pathname === link.href
                        ? `calc(var(--square-size-m) * 0.02) 0px 0px ${link.color}`
                        : "none")
                  }
                >
                  {link.label}
                </Link>
              </h3>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
