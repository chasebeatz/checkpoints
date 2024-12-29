import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, index }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movie/${index}`}>See Details</Link> {/* Link to the movie description page */}
    </div>
  );
};

export default MovieCard;
