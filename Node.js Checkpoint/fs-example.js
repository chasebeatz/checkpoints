const fs = require('fs');

// Write to a file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File has been written!');

  // Read the file
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
