import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";

function SearchBar({ searchQuery, setSearchQuery, setProjectOrder }) {
  return (
    <form className={styles.searchBar}>
      <div>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) =>
            setSearchQuery(e.target.value.trimStart().replace("  ", " "))
          }
        />
        <button onClick={() => setSearchQuery("")}>Clear</button>
      </div>
      <div>
        <div className={styles.filtersContainer}>
          <button className={styles.filtersBtn}>Filters</button>
          <div className={styles.filtersDropdown}>
            <div className={styles.filters}>
              <button>Reset</button>
              <label>
                <input type="checkbox" name="option1" /> Option 1
              </label>
              <label>
                <input type="checkbox" name="option2" /> Option 2
              </label>
              <label>
                <input type="checkbox" name="option3" /> Option 3
              </label>
              <label>
                <input type="checkbox" name="option4" /> Option 4
              </label>
            </div>
          </div>
        </div>
        <select
          name="project-order"
          id="project-order"
          onChange={(e) => setProjectOrder(e.target.value)}
        >
          <option value="new-to-old">Newest to Oldest</option>
          <option value="old-to-new">Oldest to Newest</option>
        </select>
      </div>
    </form>
  );
}
SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  setProjectOrder: PropTypes.func,
};

export default SearchBar;
