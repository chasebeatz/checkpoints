// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Save the data to state
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
