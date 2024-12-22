// src/components/Filter.jsx
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        onFilterChange(event.target.value, rating);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
        onFilterChange(title, event.target.value);
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search by title"
                value={title}
                onChange={handleTitleChange}
            />
            <input
                type="number"
                placeholder="Search by rating"
                value={rating}
                onChange={handleRatingChange}
                min="0"
                max="10"
            />
        </div>
    );
};

export default Filter;
