// src/App.jsx
import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
    const [movies, setMovies] = useState([
        {
            title: "Inception",
            description: "A mind-bending thriller about dreams within dreams.",
            posterURL: "https://image.url/inception.jpg",
            rating: 8.8
        },
        {
            title: "The Dark Knight",
            description: "Batman faces off against the Joker in this gritty action film.",
            posterURL: "https://image.url/darkknight.jpg",
            rating: 9.0
        },
        {
            title: "Interstellar",
            description: "A space epic about time travel and love.",
            posterURL: "https://image.url/interstellar.jpg",
            rating: 8.6
        }
    ]);

    const [filteredMovies, setFilteredMovies] = useState(movies);

    const handleFilterChange = (title, rating) => {
        const filtered = movies.filter(movie => {
            return (
                movie.title.toLowerCase().includes(title.toLowerCase()) &&
                (rating ? movie.rating >= rating : true)
            );
        });
        setFilteredMovies(filtered);
    };

    const handleAddMovie = () => {
        const newMovie = {
            title: "New Movie",
            description: "A brand new movie.",
            posterURL: "https://image.url/newmovie.jpg",
            rating: 7.5
        };
        setMovies([...movies, newMovie]);
        setFilteredMovies([...movies, newMovie]);
    };

    return (
        <div className="app">
            <h1>Movie App</h1>
            <Filter onFilterChange={handleFilterChange} />
            <MovieList movies={filteredMovies} />
            <button onClick={handleAddMovie}>Add Movie</button>
        </div>
    );
};

export default App;
