import Image from "./assets/img/projects/3-column-preview-card-component.png";

import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <h2>My Project</h2>
      <img src={Image} alt="" />
      <div className={styles.links}>
        <a href="#">Code</a>
        <a href="#">Live Site</a>
      </div>
    </div>
  );
}

export default Card;
