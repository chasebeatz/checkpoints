import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard';

// Example movie data with description and trailer
const initialMovies = [
  {
    title: 'Movie Title 1',
    description: 'This is the description for Movie 1.',
    posterURL: 'https://example.com/movie1.jpg',
    rating: 8,
    trailerLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // Other movies here
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchRating, setSearchRating] = useState('');

  // Filtered movies
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
    );
  });

  return (
    <Router>
      <div className="app">
        <h1>My Movie App</h1>

        <Filter
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          searchRating={searchRating}
          setSearchRating={setSearchRating}
        />

        <Routes>
          {/* Home route: List of movies */}
          <Route
            path="/"
            element={<MovieList movies={filteredMovies} />}
          />
          
          {/* Movie description page */}
          <Route
            path="/movie/:movieId"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

// Movie Description Page component
const MovieDescription = ({ movies }) => {
  const movieId = window.location.pathname.split('/')[2]; // Get movieId from URL
  const movie = movies[movieId];

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default App;
