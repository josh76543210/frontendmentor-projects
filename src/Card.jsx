import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./Card.module.css";

function Card({ data }) {
  // dynamically import screenshot
  const [imgUrl, setImgUrl] = useState("");
  import(data.screenshot).then((image) => setImgUrl(image));

  return (
    <div className={styles.card}>
      <h2>{data.title}</h2>
      <img src={imgUrl.default} alt="Project Screenshot" />
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
