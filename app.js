const mcButton = document.getElementById('microcontroller-btn');
mcButton.addEventListener('click', () => {
    document.getElementById("microcontroller-blurb").textContent +=
        "The projects were completed as part of my electronics lab sessions and initially" +
        " involved powering LED lights with pull-up or pull-down resistor combinations and " +
        "using a potentiometer to control the brightness of the LEDs. Before then moving on " +
        "to the projects above."
    mcButton.remove();
})

const trackerButton = document.getElementById('tracker-btn');
trackerButton.addEventListener('click', () => {
    document.getElementById("tracker-blurb").textContent +=
        "The application interacts with a database powered by MongoDB and uses " +
        "Node.js and Express to process requests and send responses from the server. " +
        "Utilising the Alpha Vantage symbol search engine the stock entered is matched to " +
        "the most likely option. Additionally, assets can be edited by simply adding more " +
        "or using a negative value to reduce the amount held."
    trackerButton.remove();
})

const mSquaresButton = document.getElementById('msquares-btn');
mSquaresButton.addEventListener('click', () => {
    document.getElementById("memory-squares-blurb").textContent +=
        "The game takes user input by mouse click and increments the pattern until the " +
        "user clicks on the wrong square. The pattern is stored using a C++ vector " +
        "and each square is randomly generated. Additionally, the game contains sound effects " +
        "which differs for correct and wrong answers."

        mSquaresButton.remove();
})

const portfolioButton = document.getElementById('portfolio-btn');
portfolioButton.addEventListener('click', () => {
    document.getElementById("portfolio-blurb").textContent +=
        "Additionally, I added effects using CSS transitions and animations " +
        "to enhance the user experience. Each project section has a 'read more' " +
        "button which uses JavaScript event listeners to remove the button and add " +
        "additional text."
    portfolioButton.remove();
})

