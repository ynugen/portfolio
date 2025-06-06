"use client";
import styles from "@/app/styles/Contact.module.css";
import NavLink from "../components/NavLink";
import { useEffect, useState } from "react";
import config from "../../../next.config.js";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Contact() {
  const [showGif, setShowGif] = useState(false);
  const [hideGif, setHideGif] = useState(false);
  const basePath = config.basePath;
  const pathname = usePathname();

  useEffect(() => {
    setShowGif(true);

    const duration = 1000;
    const hideTimeout = setTimeout(() => {
      setHideGif(true);
    }, duration);

    return () => clearTimeout(hideTimeout);
  }, []);

  return (
    <div
      className={`relative h-screen flex justify-start align-center`}
      style={{ backgroundColor: "var(--marigold)" }}
    >
      <div
        className="page flex flex-col align-center justify-start relative"
        style={
          hideGif
            ? { backgroundColor: "var(--marigold)" }
            : { backgroundColor: "transparent" }
        }
      >
        <div className={`${styles.backContainer} z-[1]`}>
          <NavLink direction="back" alt="back arrow">
            <h3>
              <Link
                href="/"
                className={`link`}
                style={{
                  textShadow:
                    pathname === "/"
                      ? `calc(var(--square-size) * 0.02) 0px 0px var(--peach)`
                      : "var(--slate-grey)",
                  color: `var(--slate-grey)`,
                  transition: "text-shadow 0.3s ease", // Add transition for smooth animation
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textShadow = `calc(var(--square-size) * 0.02) 0px 0px var(--peach)`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textShadow =
                    pathname === "/"
                      ? `calc(var(--square-size) * 0.02) 0px 0px var(--peach)`
                      : "none")
                }
              >
                Back
              </Link>
            </h3>
          </NavLink>
        </div>
        {/* Show honey animation */}
        {showGif && !hideGif && (
          <Image
            src={`${basePath}/images/honey.gif`}
            alt="Melting honey animation"
            fill
            className="object-cover"
            priority
            style={{ backgroundColor: "var(--background)" }}
          />
        )}
        {/* Title */}
        <div
          className="title-2 peach-dropshadow page-title-container h-[var(--title-font-size)] text-center z-[1]"
          style={{ color: "var(--slate-grey)" }}
        >
          <h2>Let&#39;s Connect</h2>
        </div>

        <div className={`${styles.mainContainer} z-[1]`}>
          <div
            className={`${styles.aboutContainer} ${styles.pixelBody} grey text-center`}
          >
            <div className={`${styles.small}`}>
              Nguyen MT A. (aka AYIMA) is an aspiring{" "}
            </div>
            <div className={`${styles.pixelBodyB} ${styles.medium}`}>
              CREATIVE,
            </div>
            <div className={`${styles.pixelBodyB} ${styles.medium}`}>
              {" "}
              DESIGNER,
            </div>
            <div className={`${styles.small} ${styles.pixelBodyB}`}>&</div>
            <div
              className={`${styles.pixelBodyB} ${styles.medium} text-center`}
            >
              SOFTWARE CRAFTSMAN
            </div>{" "}
            <div className={`${styles.small}`}>
              based in Melbourne, Australia.
            </div>
          </div>

          <div
            className={`${styles.body} ${styles.small} ${styles.container} grey text-center`}
          >
            <div>
              I&#39;m forever drawn between the{" "}
              <span className={`${styles.bodyBI}`}>intersection </span>of
              <span className={`${styles.bodyI}`}> design</span> and{" "}
              <span className={`${styles.bodyI}`}>technology </span>. Whether
              it&#39;s creating
              <span className={`${styles.bodyBI}`}> intuitive products</span>,
              expressive <span className={`${styles.bodyBI}`}>graphics</span>,
              playful <span className={`${styles.bodyBI}`}>games</span>,
              nostalgic <span className={`${styles.bodyBI}`}>pixel art</span>,
              or
              <span className={`${styles.bodyBI}`}> 3D models</span>. I{" "}
              <span className={`${styles.bodyI}`}>
                prioritise intentionality{" "}
              </span>{" "}
              in every decision I make and will{" "}
              <span className={`${styles.bodyI}`}>continually strive </span> to
              keep refining my craft.
            </div>
          </div>

          {/* Links */}
          <nav className={`${styles.linksContainer} grey`}>
            <NavLink direction="diagonal" alt="arrow">
              <h3>
                <a
                  href="mailto:amyymanguyen@gmail.com"
                  className={`link2 grey`}
                  target="_blank"
                >
                  Email me
                </a>
              </h3>
            </NavLink>

            <NavLink direction="diagonal" alt="arrow">
              <h3>
                <a
                  href="https://www.linkedin.com/in/ynugen/"
                  className={`link2 grey`}
                  target="_blank"
                >
                  LinkedIn
                </a>
              </h3>
            </NavLink>

            <NavLink direction="diagonal" alt="arrow">
              <h3>
                <a
                  href="https://github.com/ynugen"
                  className={`link2 grey`}
                  target="_blank"
                >
                  GitHub
                </a>
              </h3>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
