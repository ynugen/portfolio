import NavLink from "./NavLink";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Title container */}
      <div className="title-container p-3">
        {/* Scrolling animated text */}
        <div className="scrolling-container">
          <span className="body scrolling-text">
            NGUYEN MT A. (AKA AYIMA) IS A{" "}
            <span className="body-bi">
              CREAT
              <span className="body-b">IV</span>E
            </span>
            ,{" "}
            <span className="body-b">
              GRAPHIC <span className="body-bi">DESIGN</span>ER
            </span>{" "}
            , and{" "}
            <span className="body-b">
              SOFTWARE <span className="body-bi">CRAFT</span>MAN
            </span>{" "}
            BASED IN MELBOURNE, AUSTRALIA. NGUYEN MT A. (AKA AYIMA) IS A{" "}
            <span className="body-bi">
              CREAT
              <span className="body-b">IV</span>E
            </span>
            ,{" "}
            <span className="body-b">
              GRAPHIC <span className="body-bi">DESIGN</span>ER
            </span>{" "}
            , and{" "}
            <span className="body-b">
              SOFTWARE <span className="body-bi">CRAFT</span>MAN
            </span>{" "}
            BASED IN MELBOURNE, AUSTRALIA.
          </span>
        </div>

        {/* Title text */}
        <div className="title-1">
          <div style={{ color: "var(--marigold)", position: "relative" }}>
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
          </div>
        </div>

        {/* Image */}
      </div>

      {/* About and Navigational containers */}
      <div className="flex">
        {/* About text */}
        <div className="about-container flex flex-col justify-end p-3">
          {/* Motion graphic */}

          {/* About me text */}
          <div className="body-small text-justify">
            I’ve been orbiting around design my entire life - realised it as an
            afterthought and not a possibility. But time is much too a fickle
            thing for me to mull and ponder over my if only's. Imagination
            should be brought to life. Welcome to my collection of all things -
            lost and little - that I’ve curated across my years.
          </div>
        </div>

        {/* Navigation container*/}
        <div className="nav-container flex flex-col items-start self-stretch">
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
