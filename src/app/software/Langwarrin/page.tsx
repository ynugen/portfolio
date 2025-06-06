"use client";
import { useScrollEaseIn } from "../../utils/useScrollEaseIn";
import styles from "../../styles/Software.module.css";

export default function Langwarrin() {
  const easeRef = useScrollEaseIn();

  return (
    <div className="page">
      {/* Title */}
      <div
        ref={easeRef}
        className={`${styles.titleContainer} title-3 olive text-center scroll-ease-in`}
      >
        <span className={`${styles.title}`}>
          <h2>Langwarrin Website Revamp</h2>
        </span>
      </div>

      {/* Body */}
    </div>
  );
}
