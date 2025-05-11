import styles from "@/app/styles/MobileHeader.module.css";
import NavLink from "./NavLink";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import config from "../../../next.config.js";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/links";

const basePath = config.basePath;

const MobileHeader: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        {/* Scrolling container */}
        <div
          className={`scrolling-container`}
          onClick={() => (window.location.href = navLinks.contact[0].href)}
          style={{ cursor: "pointer" }}
        >
          <span
            className={`scrolling-text  body`}
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
        <div className={`title-1 grey flex ${styles.nameContainer}`}>
          <Title className="title-1 flex" color="var(--marigold)">
            <Link href="/">
              <h1>AYIMA</h1>
            </Link>
          </Title>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
