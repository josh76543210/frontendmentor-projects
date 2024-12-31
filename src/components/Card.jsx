import PropTypes from "prop-types";

import styles from "./Card.module.css";

function Card({ data }) {
  return (
    <div className={styles.card}>
      <h2>{data.title}</h2>
      <img
        className={data.centeredImg ? "" : styles.notCenteredImg}
        src={`/screenshots/${data.screenshot}`}
        alt="Project Screenshot"
      />
      <div className={styles.links}>
        <a href={data.repo} target="_blank">
          Code
        </a>
        <a href={data.url} target="_blank">
          Live Site
        </a>
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
