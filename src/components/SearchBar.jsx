import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <input type="text" placeholder="Search challenges..." />
      <div>
        <select name="" id=""></select>
        <select name="" id=""></select>
      </div>
    </form>
  );
}

export default SearchBar;
