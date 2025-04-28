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
      <p><strong>Name:</strong> Pratik Ghanswant</p>
<p><strong>Age:</strong> 16</p>
<p><strong>Grade:</strong> 11th Grade Student</p>
<p><strong>Interests:</strong></p>
<ul>
    <li>Passionate about technology, coding, and development.</li>
    <li>Interested in cybersecurity, software development, and IT-related fields.</li>
    <li>Enjoys building projects and learning new programming skills.</li>
    <li>Currently building a futuristic portfolio website and learning new skills.</li>
</ul>
    </div>
  `,
  projects: `
    <div class="card">
      <h2>Projects</h2>
      <<p><strong>Projects:</strong></p>
<ul>
    <li><strong>Chess Game:</strong> A fun and interactive chess game built with JavaScript.</li>
    <li><strong>Futuristic Portfolio:</strong> A personal portfolio website with futuristic design, smooth animations, and interactive features.</li>
    <li><strong>Current Project:</strong> Actively building a bigger project and still learning new technologies.</li>
</ul>
    </div>
  `,
  skills: `
    <div class="card">
      <h2>Skills</h2>
      
<p><strong>Skills:</strong></p>
<ul>
    <li><strong>Languages:</strong> Learning Japanese, with a focus on Hiragana and Katakana.</li>
    <li><strong>Technical Skills:</strong>
        <ul>
            <li>Web Development: HTML, CSS, JavaScript (with frameworks like React).</li>
            <li>Game Development (Chess game).</li>
            <li>Graphic Design: Basic knowledge of tools for design projects.</li>
            <li>Cybersecurity: Basic understanding and interest in advancing in this field.</li>
            <li>Finance and Business Skills.</li>
        </ul>
    </li>
    <li><strong>Soft Skills:</strong>
        <ul>
            <li>Leadership Skills: Developing communication and leadership capabilities.</li>
            <li>Self-Improvement: Constantly learning mindfulness, communication, and human behavior.</li>
        </ul>
    </li>
</ul>
    </div>
  `,
  contact: `
    <div class="card">
      <h2>Contact Me</h2>
<p><strong>Social Media Links:</strong></p>
<ul>
    <li><strong>GitHub:</strong> <a href="https://github.com/PROTOX-1" target="_blank">PROTOX-1</a></li>
    <li><strong>Discord:</strong> <a href="#">Join Discord Server</a></li>
    <li><strong>LinkedIn:</strong> <a href="#">LinkedIn Profile</a></li>
    <li><strong>Twitter:</strong> <a href="https://x.com/Gamezone454271">@Gamezone454271</a></li>
    <li><strong>Instagram:</strong> <a href="https://instagram.com/notprotox">@notprotox</a></li>
</ul>
    </div>
  `
};

document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');
    document.getElementById('tab-content').innerHTML = tabContent[tab];
  });
});
