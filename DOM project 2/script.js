document.addEventListener('DOMContentLoaded', function() {
    // Select the color box and button
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
    // Function to generate a random color
    function getRandomColor() {
        // Generate a random hexadecimal color
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for the button click
    changeColorBtn.addEventListener('click', function() {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor; // Change the background color
    });
});
