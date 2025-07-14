/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/

// Function to fetch and display a random useless fact
function fetchAndDisplayFact() {
  // Show loading message
  const outputElement = document.getElementById('output');
  outputElement.innerText = 'Loading a fun fact...';

  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Display the fact in a user-friendly way
      outputElement.innerHTML = '<strong>Did you know?</strong><br>' + data.text;
    })
    .catch(function(error) {
      // Handle errors gracefully
      outputElement.textContent = 'Sorry, could not load a fact right now.';
      console.error('Error fetching fact:', error);
    });
}

// Fetch a fact on initial page load
fetchAndDisplayFact();

// Add event listener to the button to fetch a new fact on click
const fetchFactBtn = document.getElementById('fetch-fact-btn');
if (fetchFactBtn) {
  fetchFactBtn.addEventListener('click', fetchAndDisplayFact);
}

// Function to fetch and display today's fact
function fetchTodayFact() {
  const outputElement = document.getElementById('output');
  outputElement.innerText = 'Loading today\'s fact...';

  fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      outputElement.innerHTML = '<strong>Today\'s Useless Fact:</strong><br>' + data.text;
    })
    .catch(function(error) {
      outputElement.textContent = 'Sorry, could not load today\'s fact.';
      console.error('Error fetching today\'s fact:', error);
    });
}

// Add event listener to the 'Get Today Fact' button
const todayFactBtn = document.getElementById('today-fact-btn');
if (todayFactBtn) {
  todayFactBtn.addEventListener('click', fetchTodayFact);
}

// Use this script to write your fetch logic
// You'll fetch data from your selected API and display it on the page

// Example placeholder:
console.log("Team activity starter code loaded.");