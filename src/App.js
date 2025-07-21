import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [genreFilter, setGenreFilter] = useState('');

  useEffect(() => {
    fetch('/movies.json')
      .then(res => res.json())
      .then(data => {
        setMovies(data);
        setFilteredMovies(data);
      });
  }, []);

  useEffect(() => {
    let filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter &&
      (genreFilter === '' || movie.genre.includes(genreFilter))
    );
    setFilteredMovies(filtered);
  }, [titleFilter, ratingFilter, genreFilter, movies]);

  return (
    <div className="App">
      <h1>🎬 Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

