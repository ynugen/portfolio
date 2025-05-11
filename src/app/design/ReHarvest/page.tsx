import styles from "@/app/styles/ReHarvest.module.css";

export default function ReHarvest() {
  return (
    <div className="page">
      {/* Title */}
      <div className={`${styles.titleContainer}`}>
        <span className={`${styles.title}`}>
          <h2>ReHarvest:</h2>
        </span>{" "}
        <span className={`${styles.subtitle} grey`}>
          Rethinking Food Waste for Good
        </span>
      </div>

      {/* Body */}
      <div className={`${styles.bodyContainer}`}>
        <div className={styles.paraContainer}>
          <div className={`${styles.heading} ${styles.headingContainer} olive`}>
            [ Problem Statement ]
          </div>

          <div className={styles.body}>
            Farmers across Australia are{" "}
            <span className={styles.bodyb}>forced</span> to discard perfectly
            good produce that doesn’t meet the strict cosmetic standards of
            major supermarkets, leading to wasted resources like labour, water,
            and fuel, and stripping farmers of potential income. Meanwhile,
            consumers face inflated prices and rising food insecurity, missing
            out on nutritious, affordable options that never reach shelves.
          </div>
        </div>
      </div>
    </div>
  );
}
