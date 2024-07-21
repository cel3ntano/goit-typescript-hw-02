import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ handleSearch }) {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    const notify = () =>
      toast.error("Please enter a search query", {
        duration: 2000,
      });
    if (query === "") {
      notify();
      return;
    }

    handleSearch(query);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          name='search'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search for images'
        />
        <button type='submit'>
          <CiSearch size='22px' />
        </button>
        <Toaster
          containerStyle={{
            top: 80,
          }}
          toastOptions={{
            style: {
              backgroundColor: "#6d6d6d",
              border: "1px solid #757575",
              padding: "8px",
              color: "#bababa",
              marginTop: "40px",
            },
            error: {
              iconTheme: {
                primary: "#c36060",
                secondary: "#dcdcdc",
              },
            },
          }}
        />
      </form>
    </header>
  );
}
