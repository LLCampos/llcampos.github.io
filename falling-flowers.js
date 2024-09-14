function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.innerHTML = '🌸'; // You can change this to other flower emojis like 🌼, 🌺, or 💐
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = Math.random() * 5 + 5 + 's'; // Between 5 and 10 seconds
  document.body.appendChild(flower);

  // Remove the flower after animation ends
  setTimeout(() => {
    flower.remove();
  }, 20000);
}

function startFallingFlowers() {
  setInterval(createFlower, 500); // Create a new flower every 300ms
}

// Start the falling flowers effect when the page loads
window.addEventListener('load', startFallingFlowers);