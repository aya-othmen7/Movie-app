import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <button onClick={() => navigate('/')}>← Back to Home</button>
    </div>
  );
}

export default MovieDetails;
