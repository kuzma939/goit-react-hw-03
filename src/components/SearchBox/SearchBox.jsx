import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
    return (
        <>
        <p>Find contact by name</p>
      <input
      className={css.search}
        type="text"
        placeholder="Search contacts"
        value={value}
        onChange={onChange}
      />
      </>
    );
  }
  
  export default SearchBox;