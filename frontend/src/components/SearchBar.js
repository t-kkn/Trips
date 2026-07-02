import React from 'react';

function SearchBar({ query, onQueryChange }) {
  return (
    <div className="row">
      <input
        type="text"
        placeholder=""
        value={query}
        className="form-control text-center"
        onChange={event => onQueryChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
