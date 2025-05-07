import NavLink from "./NavLink";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import config from "../../../next.config.js";
import { usePathname } from "next/navigation";

const basePath = config.basePath;

const Sidebar: React.FC = () => {
  // Get the current relative pathname
  const pathname = usePathname();

  const navLinks = {
    main: [
      { href: "/design", label: "Design", color: "var(--lavender-mauve)" },
      { href: "/software", label: "Software", color: "var(--periwinkle)" },
      { href: "/whimsy", label: "Whimsy", color: "var(--marigold)" },
      { href: "/misc", label: "Misc", color: "var(--peach)" },
    ],
    contact: [
      {
        href: "/contact",
        label: "Contact",
        color: "var(--marigold)",
      },
    ],
  };

  return (
    <div className="sidebar">
      {/* Title container */}
      <div className="title-container p-3">
        {/* Scrolling animated text */}
        <div className="scrolling-container">
          <span className="body scrolling-text">
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
              SOFTWARE <span className="body-bi">CRAFT</span>MAN
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
              SOFTWARE <span className="body-bi">CRAFT</span>MAN
            </span>{" "}
            BASED in MELBOURNE, AUSTRALIA.{" "}
          </span>
        </div>

        <div className="profile-container">
          {/* Title text */}
          <div className="title-1 flex name-container">
            <Title className="title-1 flex" color="var(--slate-grey)">
              <Link href="/">
                <h1>AYIMA</h1>
              </Link>
            </Title>
          </div>

          {/* Image */}
          <div className="image-container" style={{ overflow: "hidden" }}>
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
      <div className="flex sub-container">
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
        <div className="nav-container flex flex-col items-start self-stretch">
          {/* Page Links */}
          <div className="page-links flex flex-col justify-between items-start p-3">
            {navLinks.main.map((link) => (
              <NavLink key={link.href} direction="default" alt="arrow">
                <h3>
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href ? "active-link link" : "link"
                    }`}
                    style={{
                      color:
                        pathname === link.href
                          ? link.color
                          : "var(--slate-grey)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = link.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        pathname === link.href
                          ? link.color
                          : "var(--slate-grey)")
                    }
                  >
                    {link.label}
                  </Link>
                </h3>
              </NavLink>
            ))}
          </div>

          {/* Contact Me link */}
          <div className="contact-links flex flex-col justify-end items-start p-3">
            {navLinks.contact.map((link) => (
              <NavLink key={link.href} direction="diagonal" alt="arrow">
                <h3>
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href
                        ? `${link.color} active-link link`
                        : "link"
                    }`}
                    style={{
                      color:
                        pathname === link.href
                          ? link.color
                          : "var(--slate-grey)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = link.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        pathname === link.href
                          ? link.color
                          : "var(--slate-grey)")
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
    </div>
  );
};
export default Sidebar;
