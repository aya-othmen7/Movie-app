import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";
import AddMovieModal from "./components/AddMovieModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails"; // to be created

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [genreFilter, setGenreFilter] = useState("");

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      });
  }, []);

  useEffect(() => {
    let filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= ratingFilter &&
        (genreFilter === "" || movie.genre.includes(genreFilter))
    );
    setFilteredMovies(filtered);
  }, [titleFilter, ratingFilter, genreFilter, movies]);

  return (
    <Router>
      <div className="App">
        <h1>🎬 Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  titleFilter={titleFilter}
                  setTitleFilter={setTitleFilter}
                  ratingFilter={ratingFilter}
                  setRatingFilter={setRatingFilter}
                  genreFilter={genreFilter}
                  setGenreFilter={setGenreFilter}
                />
                <AddMovieModal
                  onAdd={(movie) => setMovies([...movies, movie])}
                />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
