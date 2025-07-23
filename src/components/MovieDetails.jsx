import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return (
      <div className="movie-detail not-found">
        <h2>🎬 Movie App</h2>
        <p>❌ Movie not found</p>
        <Link className="back-button" to="/">⬅️ Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <h2 className="title">{movie.title}</h2>
      <div className="content">
        <img src={movie.posterURL} alt={movie.title} className="poster" />
        <div className="info">
          <p><strong>Description:</strong> {movie.description}</p>
          <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
          <p><strong>Genre:</strong> 🎭 {movie.genre.join(', ')}</p>
        </div>
      </div>
      <div className="trailer">
        <iframe
          src={movie.trailerURL}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link className="back-button" to="/">⬅️ Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
