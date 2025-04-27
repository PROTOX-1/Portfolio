// Typing Effect
const text = ["Hi, I'm Pratik.", "Welcome to my Futuristic Portfolio."];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('typing-text').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // Pause before next line
  } else {
    setTimeout(type, 100);
  }
})();

// Particles
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
  },
});

// Transition Welcome -> Main Page
document.getElementById('enter-btn').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('main-page').style.display = 'block';
});

// Tab switching
const tabContent = {
  about: `
    <div class="card">
      <h2>About Me</h2>
      <p>Hi! I'm Pratik, a passionate developer who loves building futuristic, beautiful web experiences. I'm focused on creating engaging digital worlds with code and design.</p>
    </div>
  `,
  projects: `
    <div class="card">
      <h2>Projects</h2>
      <ul>
        <li>🔹 Handwritten Robot Project</li>
        <li>🔹 Chess Game (Custom Coded)</li>
        <li>🔹 Personal GitHub Website</li>
      </ul>
    </div>
  `,
  skills: `
    <div class="card">
      <h2>Skills</h2>
      <ul>
        <li>💻 Web Development (HTML, CSS, JS)</li>
        <li>🔒 Cybersecurity Enthusiast</li>
        <li>⚙️ Programming (Python, JS)</li>
      </ul>
    </div>
  `,
  contact: `
    <div class="card">
      <h2>Contact Me</h2>
      <p>Email: pratik@example.com</p>
      <p>GitHub: github.com/pratikghanswant</p>
    </div>
  `
};

document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');
    document.getElementById('tab-content').innerHTML = tabContent[tab];
  });
});
