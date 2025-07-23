import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-link">
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
