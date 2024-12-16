// src/App.js
import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Importing components from React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';


const App = () => {
  const firstName = "John"; // Replace with your first name, or leave as empty string to say "Hello, there!"

  return (
    <div className="container" style={{ paddingTop: '50px' }}>
      <Card style={{ width: '18rem', margin: '0 auto' }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img
              src="https://via.placeholder.com/100" // You can replace this with your own image
              alt="Greeting"
              style={{ borderRadius: '50%' }}
            />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
};

export default App;


