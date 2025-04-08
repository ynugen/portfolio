const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 gap-2.5">
      {/* Larger Profile Container */}
      <div className="flex p-6 flex-col items-center gap-2.5 self-stretch">
        <div className="scrolling-text-container">
          <div className="scrolling-text flex-[0_0_100%]">
            <div>
              <span className="body-text">
                Nguyen MT A. (aka Ayima) is a{" "}
                <span className="scroll-italic">CREATIVE</span>,{" "}
                <span className="scroll-italic">GRAPHIC DESIGNER</span>, and{" "}
                <span className="scroll-italic">SOFTWARE CRAFTSMAN</span> based
                in Melbourne, Australia
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="title-container flex flex-col items-start">
          <div className="page-title">
            <h1>AYIMA</h1>
          </div>

          <div>
            <img
              src="/images/lovely.png"
              alt="AYIMA"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center self-stretch">
        {/* About Me container */}
        <div
          className="flex px-4.5 py-4.5 flex-col items-center gap-2.5 justify-end"
          style={{ height: "20rem" }}
        >
          <div className="body-small">
            I’ve been orbiting around design my entire life - realised it as an
            afterthought and not a possibility. But time is much too a fickle
            thing for me to mull and ponder over my what ifs. Imagination should
            be brought to life. Welcome to my collection of all things - lost
            and little - that I’ve curated across my years.
          </div>
        </div>

        {/* Navigation Links Container */}
        <div className="flex flex-col items-center">
          <div
            className="subheading-1 gap-2.5 justify-center p-2.5"
            style={{ height: "10.0625rem" }}
          >
            <div>Design</div>
            <div>Software</div>
            <div>Whimsy</div>
            <div>Misc</div>
          </div>

          <div
            className="subheading-1 flex flex-col justify-end items-center p-2.5 gap-2.5"
            style={{ height: "10.0625rem" }}
          >
            <div>Connect</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
