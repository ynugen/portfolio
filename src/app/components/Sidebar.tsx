"use client";
import styles from "@/app/styles/Sidebar.module.css";
import NavLink from "./NavLink";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import config from "../../../next.config.js";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/links";
import { useEffect, useState } from "react";

const basePath = config.basePath;

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [handleClick, setHandleClick] = useState<(() => void) | null>(null);
  const isProjectPage = pathname.split("/").filter(Boolean).length >= 2;
  const isAboutPage = pathname === "/contact";

  useEffect(() => {
    // Set click handler on the client
    setHandleClick(() => () => {
      window.location.href = `${basePath}${navLinks.contact[0].href}`;
    });
  }, []);

  return (
    <div
      className={!isAboutPage ? `${styles.sidebar}` : `${styles.backContainer}`}
      style={
        !isProjectPage && !isAboutPage
          ? { width: "calc(var(--square-size)*3)" }
          : isAboutPage
          ? { width: "fit-content" }
          : { width: "var(--square-size)" }
      }
    >
      {/* Title container */}
      <div
        className={
          isProjectPage
            ? `${styles.verticalTitleContainer}`
            : `${styles.titleContainer}`
        }
        style={isAboutPage ? { width: "0", display: "none" } : {}}
      >
        {/* Scrolling animated text */}
        <div
          className={`scrolling-container`}
          onClick={handleClick ?? undefined}
          style={{ opacity: 1, cursor: "pointer" }}
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

        {/* Title text */}
        <div
          className={
            isProjectPage
              ? `title-11 grey flex ${styles.verticalNameContainer}`
              : `title-1 grey flex ${styles.nameContainer}`
          }
        >
          <Title
            className={isProjectPage ? "title-11 flex" : "title-1 flex"}
            color="var(--peach)"
          >
            <Link href="/">
              <h1>AYIMA</h1>
            </Link>
          </Title>
        </div>

        {/* Image */}
        <div
          className={`${styles.imageContainer}
            }`}
          style={
            !isProjectPage
              ? { overflow: "hidden" }
              : { opacity: 0, display: "none" }
          }
        >
          <Image
            src={`${basePath}/images/lovely.png`}
            alt="Profile picture"
            objectFit="contain"
            layout="responsive"
            height={200}
            width={200}
          />
        </div>
      </div>

      <div
        className={styles.subContainer}
        style={isAboutPage ? { width: "0", display: "none" } : {}}
      >
        {/* About Text */}
        <div
          className={`${styles.aboutContainer}`}
          style={
            isProjectPage
              ? { opacity: 0, visibility: "hidden", display: "none" }
              : { opacity: 1, visibility: "visible" }
          }
        >
          {/* Motion graphic */}
          <div className={`${styles.imageContainer}`}>
            <Image
              src={`${basePath}/images/lovely.png`}
              alt="Motion graphic"
              objectFit="cover"
              layout="responsive"
              height={200}
              width={200}
            />
          </div>

          {/* About me text */}
          <div className={`body-small text-justify grey`}>
            I&#39;ve been orbiting around design my entire life - realised it as
            an afterthought and not a possibility. But time is much too a fickle
            thing for me to mull and ponder over if only&#39;s. Imagination
            should be brought to life. Welcome to my collection of all things -
            lost and little - that I&#39;ve curated across my years.
          </div>
        </div>

        {/* Navigation Links */}
        <nav className={`${styles.navContainer}`}>
          {/* Page Links */}
          <nav className={`${styles.pageLinks}`}>
            {navLinks.main.map((link) => (
              <NavLink key={link.href} direction="default" alt="arrow">
                <h4>
                  <Link
                    href={link.href}
                    className={`link`}
                    style={{
                      textShadow:
                        pathname === link.href
                          ? `calc(var(--square-size) * 0.02) 0px 0px ${link.color}`
                          : "var(--slate-grey)",
                      color: `var(--slate-grey)`,
                      transition: "text-shadow 0.3s ease", // Add transition for smooth animation
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
                </h4>
              </NavLink>
            ))}
          </nav>

          {/* Contact Links */}
          <nav className={`${styles.contactLinks}`}>
            {navLinks.contact.map((link) => (
              <NavLink key={link.href} direction="diagonal" alt="arrow">
                <h4>
                  <Link
                    href={link.href}
                    className={`link`}
                    style={{
                      textShadow:
                        pathname === link.href
                          ? `calc(var(--square-size) * 0.02) 0px 0px ${link.color}`
                          : "var(--slate-grey)",
                      color: `var(--slate-grey)`,
                      transition: "text-shadow 0.3s ease", // Add transition for smooth animation
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
                </h4>
              </NavLink>
            ))}
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
