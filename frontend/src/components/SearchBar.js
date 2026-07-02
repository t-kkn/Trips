import React from 'react';

function SearchBar({ query, onQueryChange }) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-6">
        <div className="input-group shadow-sm">
          <span className="input-group-text bg-white border-end-0 text-muted">
            🔍
          </span>
          <input
            type="text"
            placeholder="ค้นหาสถานที่ท่องเที่ยว เช่น ทะเล ภูเขา..."
            value={query}
            className="form-control border-start-0 py-2"
            onChange={event => onQueryChange(event.target.value)}
          />
          {query && (
            <button
              className="btn btn-outline-secondary border-start-0"
              onClick={() => onQueryChange('')}
              title="ล้างการค้นหา"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
