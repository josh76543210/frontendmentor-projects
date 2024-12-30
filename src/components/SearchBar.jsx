import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({
  projectsData,
  searchQuery,
  setSearchQuery,
  setProjectOrder,
  projectTools,
  setProjectTools,
}) {
  const [displayFilters, setDisplayFilters] = useState(false);

  // get filters from project data
  const uniqueFiltersArray = [
    ...new Set(projectsData.map((project) => project.tools).flat()),
  ];

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
          Filter {projectTools.length > 0 ? `(${projectTools.length})` : ""}
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
              <div className={styles.filterBtns}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setProjectTools([]);
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
              </div>
              <ul className={styles.filterList}>
                {uniqueFiltersArray.map((filter) => (
                  <li key={filter}>
                    <label>
                      <input
                        type="checkbox"
                        name={filter}
                        checked={projectTools.includes(filter)}
                        onChange={(e) => {
                          // add item if it is checked
                          if (e.target.checked)
                            setProjectTools((cur) => [...cur, e.target.name]);
                          // remove if not
                          else
                            setProjectTools((cur) =>
                              cur.filter((tool) => tool !== e.target.name)
                            );
                        }}
                      />
                      {filter}
                    </label>
                  </li>
                ))}
              </ul>
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
  projectsData: PropTypes.array,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  setProjectOrder: PropTypes.func,
  projectTools: PropTypes.array,
  setProjectTools: PropTypes.func,
};

export default SearchBar;
