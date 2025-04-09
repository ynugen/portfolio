import NavLink from "./NavLink";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Title container */}
      <div>
        {/* Scrolling animated text */}

        {/* Title text */}

        {/* Image */}
      </div>

      {/* About and Navigational containers */}
      <div>
        {/* About text */}
        <div></div>

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
