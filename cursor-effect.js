document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.7) {  // Adjust this value to control frequency
        createFlower(e.clientX, e.clientY);
    }
});

function createFlower(x, y) {
    const flower = document.createElement('div');
    flower.innerHTML = '🌸';  // You can change this to other flower emojis
    flower.classList.add('flower');
    flower.style.left = x + 'px';
    flower.style.top = y + 'px';
    document.body.appendChild(flower);

    // Remove the flower element after animation ends
    setTimeout(() => {
        flower.remove();
    }, 9000);
}