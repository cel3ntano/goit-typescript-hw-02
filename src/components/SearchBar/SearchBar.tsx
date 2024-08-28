import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import { handleSearch } from "../../types";
import { FormEvent } from "react";

interface SearchBarProps {
  handleSearch: handleSearch;
}

export default function SearchBar({ handleSearch }: SearchBarProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const query = e.currentTarget.elements.search.value.trim();
    const query = (
      e.currentTarget.elements.namedItem("search") as HTMLInputElement
    ).value.trim();
    const notify = () =>
      toast.error("Please enter a search query", {
        duration: 2000,
      });
    if (query === "") {
      notify();
      return;
    }

    handleSearch(query);
    e.currentTarget.reset();
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
