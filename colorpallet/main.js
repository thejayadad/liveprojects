document.getElementById('generateBtn').addEventListener('click', generatePalette);

function generatePalette() {
  const palette = document.querySelector('.palette');
  palette.innerHTML = ''; 
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.innerHTML = `<span class="hex-code">${color}</span>`;
    palette.appendChild(colorBox);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
