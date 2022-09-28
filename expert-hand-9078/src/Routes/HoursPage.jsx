import React from "react";
import styles from "./HoursPage.module.css";
function HoursPage() {
  return (
    <div>
      <div className={styles.timeBar}>
        <button>Sep 2022</button>
        <div>
          <p>Que</p>
          <button>Day</button>
          <div>Chart</div>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default HoursPage;
