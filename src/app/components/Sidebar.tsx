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
        <div>
          {/* Page Links */}
          <div>
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
          <div>
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
