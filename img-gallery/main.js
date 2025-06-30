const imageFiles = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const altTexts = {
  "pic1.jpg": "Closeup of a human eye",
  "pic2.jpg": "Rock that looks like a wave",
  "pic3.jpg": "Purple and white pansies",
  "pic4.jpg": "Section of wall from a pharaoh's tomb",
  "pic5.jpg": "Large moth on a leaf"
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button.dark');

imageFiles.forEach(file => {
  const img = document.createElement('img');
  img.src = `./images/${file}`;
  img.alt = altTexts[file] || '';
  img.style.cursor = 'pointer';
  img.addEventListener('click', function() {
    displayedImg.src = img.src;
    displayedImg.alt = img.alt;
  });
  thumbBar.appendChild(img);
});

btn.addEventListener('click', function() {
  if (btn.classList.contains('dark')) {
    overlay.style.backgroundColor = '';
    displayedImg.style.filter = 'brightness(50%)';
    btn.textContent = 'Lighten';
    btn.classList.remove('dark');
    btn.classList.add('light');
  } else {
    displayedImg.style.filter = 'brightness(100%)';
    btn.textContent = 'Darken';
    btn.classList.remove('light');
    btn.classList.add('dark');
    }
});