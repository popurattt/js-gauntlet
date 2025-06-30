const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const alts = {
  "pic1.jpg": "Gros plan sur un œil humain",
  "pic2.jpg": "Rocher sur la plage au coucher du soleil",
  "pic3.jpg": "Fleur de camomille blanche",
  "pic4.jpg": "Mur de briques rouges avec une fenêtre",
  "pic5.jpg": "Papillon sur une feuille verte"
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');

images.forEach(function(imgName) {
  const newImage = document.createElement('img');
  newImage.src = `./images/${imgName}`;
  newImage.alt = alts[imgName];
  newImage.style.cursor = 'pointer';
  newImage.addEventListener('click', function() {
    displayedImg.src = `./images/${imgName}`;
    displayedImg.alt = alts[imgName];
  });
  thumbBar.appendChild(newImage);
});

btn.addEventListener('click', function() {
  if (btn.classList.contains('dark')) {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = 'Lighten';
    btn.classList.remove('dark');
    btn.classList.add('light');
  } else {
    overlay.style.backgroundColor = 'transparent';
    btn.textContent = 'Darken';
    btn.classList.remove('light');
    btn.classList.add('dark');
  }
});
