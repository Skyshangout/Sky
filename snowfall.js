document.addEventListener("DOMContentLoaded", () => {
    const snowfallContainer = document.querySelector('.snowfall');
    
    const createSnowflakes = (numFlakes = 100) => {
        for (let i = 0; i < numFlakes; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            
            // Set random positions
            const startX = Math.random();
            const endX = Math.random();
            const size = Math.random() * 5 + 5; // Random snowflake size between 5px and 10px
            
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration
            snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay
            
            // Setting custom properties for animation (starting and ending positions)
            snowflake.style.setProperty('--start-x', startX);
            snowflake.style.setProperty('--end-x', endX);
            
            snowfallContainer.appendChild(snowflake);
        }
    };

    createSnowflakes(150); // Creates 150 snowflakes
});
