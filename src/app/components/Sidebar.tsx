import NavLink from "./NavLink";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import config from "../../../next.config.js";

const basePath = config.basePath;

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Title container */}
      <div className="title-container p-3">
        {/* Scrolling animated text */}
        <div className="scrolling-container">
          <span className="body scrolling-text">
            NGUYEN MT A. (AKA <span className="body-b">AYIMA</span>) IS A{" "}
            <span className="body-bi">
              CREAT
              <span className="body-b">IV</span>E
            </span>
            ,{" "}
            <span className="body-b">
              GRAPHIC <span className="body-bi">DESIGN</span>ER
            </span>{" "}
            , AND{" "}
            <span className="body-b">
              SOFTWARE <span className="body-bi">CRAFT</span>MAN
            </span>{" "}
            BASED in MELBOURNE, AUSTRALIA. NGUYEN MT A. (AKA{" "}
            <span className="body-b">AYIMA</span>) IS A{" "}
            <span className="body-bi">
              CREAT
              <span className="body-b">IV</span>E
            </span>
            ,{" "}
            <span className="body-b">
              GRAPHIC <span className="body-bi">DESIGN</span>ER
            </span>{" "}
            , AND{" "}
            <span className="body-b">
              SOFTWARE <span className="body-bi">CRAFT</span>MAN
            </span>{" "}
            BASED in MELBOURNE, AUSTRALIA.{" "}
          </span>
        </div>

        <div className="profile-container">
          {/* Title text */}
          <div className="title-1 flex h-[6.5rem]">
            {/* <div style={{ color: "var(--marigold)", position: "relative" }}>
              AYIMA
              <div
                className="absolute"
                style={{
                  color: "var(--slate-grey)",
                  top: "0",
                  left: "11px",
                }}
              >
                AYIMA
              </div>
            </div> */}

            <Title className="title-1 flex h-[6.5rem]" color="var(--marigold)">
              <Link href="/">
                <h1>AYIMA</h1>
              </Link>
            </Title>
          </div>

          {/* Image */}
          <div className="image-container pb-3" style={{ overflow: "hidden" }}>
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
      </div>

      {/* About and Navigational containers */}
      <div className="flex">
        {/* About text */}
        <div className="about-container flex flex-col justify-end p-3">
          {/* Motion graphic */}

          <div className="image-container pb-3">
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
          <div className="body-small text-justify">
            I&#39;ve been orbiting around design my entire life - realised it as
            an afterthought and not a possibility. But time is much too a fickle
            thing for me to mull and ponder over if only&#39;s. Imagination
            should be brought to life. Welcome to my collection of all things -
            lost and little - that I&#39;ve curated across my years.
          </div>
        </div>

        {/* Navigation container*/}
        <div className="nav-container flex flex-col items-start self-stretch subtitle-2">
          {/* Page Links */}
          <div className="page-links flex flex-col justify-between items-start p-3">
            <NavLink
              direction="default"
              alt="arrow"
              className="arrow"
              linkString="Design"
            />
            <NavLink
              direction="default"
              alt="arrow"
              className="arrow"
              linkString="Software"
            />
            <NavLink
              direction="default"
              alt="arrow"
              className="arrow"
              linkString="Whimsy"
            />
            <NavLink
              direction="default"
              alt="arrow"
              className="arrow"
              linkString="Misc"
            />
          </div>
          {/* Contact Me link */}
          <div className="contact-links flex flex-col justify-end items-start p-3">
            <NavLink
              direction="diagonal"
              alt="arrow"
              className="arrow"
              linkString="Contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
