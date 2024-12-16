// src/Image.js
import React from 'react';
import product from './product';

const Image = () => {
  return <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />;
};

export default Image;
