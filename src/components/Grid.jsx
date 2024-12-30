import PropTypes from "prop-types";

import Card from "./Card";

import styles from "./Grid.module.css";

function Grid({ projectsData }) {
  return (
    <div className={styles.grid}>
      {projectsData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
}
Grid.propTypes = {
  projectsData: PropTypes.object,
};

export default Grid;
