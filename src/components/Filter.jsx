import React from 'react';
import './Filter.css';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter, genreFilter, setGenreFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={titleFilter}
        onChange={e => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={ratingFilter}
        onChange={e => setRatingFilter(Number(e.target.value))}
        min="0"
        max="5"
      />
      <select value={genreFilter} onChange={e => setGenreFilter(e.target.value)}>
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
    </div>
  );
};

export default Filter;