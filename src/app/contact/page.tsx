import styles from "@/app/styles/Contact.module.css";

export default function Contact() {
  return (
    <div className="page">
      <div
        className="title-2 marigold-dropshadow page-title-container h-[var(--title-font-size)] text-center"
        style={{ color: "var(--slate-grey)" }}
      >
        <h2>Let&#39;s Connect</h2>
      </div>

      <div className={`${styles.mainContainer}`}>
        <div
          className={`${styles.aboutContainer} ${styles.pixelBody} grey text-center`}
        >
          <div className={`${styles.small}`}>
            Nguyen MT A. (aka AYIMA) is an aspiring{" "}
          </div>
          <div className={`${styles.pixelBodyB} ${styles.medium}`}>
            CREATIVE, DESIGNER,
          </div>
          <div className={`${styles.small} ${styles.pixelBodyB}`}>&</div>
          <div className={`${styles.pixelBodyB} ${styles.medium}`}>
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
            it&#39;s crafting
            <span className={`${styles.bodyBI}`}> intuitive products</span>,
            expressive <span className={`${styles.bodyB}`}>graphics</span>,
            playful <span className={`${styles.bodyB}`}>games</span>, nostalgic{" "}
            <span className={`${styles.bodyBI}`}>pixel art</span>, or
            <span className={`${styles.bodyBI}`}> 3D models</span>. I
            <span className={`${styles.bodyI}`}>
              prioritise intentionality{" "}
            </span>{" "}
            in every decision I make and will{" "}
            <span className={`${styles.bodyI}`}>continually strive </span> to
            keep refining my craft.
          </div>
        </div>
      </div>
    </div>
  );
}
