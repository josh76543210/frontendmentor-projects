import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ searchQuery, setSearchQuery, setProjectOrder }) {
  const [displayFilters, setDisplayFilters] = useState(false);
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
        <button
          onClick={(e) => {
            e.preventDefault();
            setSearchQuery("");
          }}
        >
          Clear
        </button>
      </div>
      <div>
        <button
          className={styles.filtersBtn}
          onClick={(e) => {
            e.preventDefault();
            setDisplayFilters(true);
          }}
        >
          Filters
        </button>
        <div
          className={`${styles.filtersOverlay} ${
            displayFilters ? styles.showFilters : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setDisplayFilters(false);
          }}
        >
          <div
            className={styles.filtersContainer}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.filters}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Reset
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setDisplayFilters(false);
                }}
              >
                Close
              </button>
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
