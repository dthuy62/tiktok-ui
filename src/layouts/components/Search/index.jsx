import React from 'react';
import { SearchIcon } from '~/components/Icons';
import './Search.scss';

const Search = () => {
  return (
    <div className="search-bar rounded-5">
      <form className="search-bar__form d-flex align-items-center">
        <input type="text" placeholder="Search accounts and videos" />
        <div className="vertical-line"></div>
        <button>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
