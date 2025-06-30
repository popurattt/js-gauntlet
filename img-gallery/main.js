const imageFiles = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const altTexts = {
  "pic1.jpg": "Yeux fermer",
  "pic2.jpg": "Roche avec une vague",
  "pic3.jpg": "Fleur violette",
  "pic4.jpg": "Peinture/gravure pharaon",
  "pic5.jpg": "Papillon"
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button.dark');


imageFiles.forEach(file => {
  const img = document.createElement('img');
  img.src = `./images/${file}`;
  img.alt = altTexts[file];
  img.addEventListener('click', () => {
    displayedImg.src = img.src;
    displayedImg.alt = img.alt;
  });
  thumbBar.appendChild(img);
});


btn.addEventListener('click', function() {
  if (btn.classList.contains('dark')) {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = 'Lighten';
    btn.classList.remove('dark');
    btn.classList.add('light');
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = 'Darken';
    btn.classList.remove('light');
    btn.classList.add('dark');
  }
});