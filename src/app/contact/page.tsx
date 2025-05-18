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
        <div className={`${styles.small}`}>based in Melbourne, Australia.</div>
      </div>
    </div>
  );
}
