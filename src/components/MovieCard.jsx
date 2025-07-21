import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>⭐ {movie.rating}</p>
        <p>🎭 {movie.genre.join(', ')}</p>
        <a href={movie.trailerURL} target="_blank" rel="noreferrer">Watch Trailer</a>
      </div>
    </div>
  );
};

export default MovieCard;
