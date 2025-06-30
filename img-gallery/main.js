const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];
const altTexts = {
  "pic1.jpg": "Closeup of a human eye",
  "pic2.jpg": "Landscape with mountains",
  "pic3.jpg": "City skyline at sunset",
  "pic4.jpg": "Forest path with sunlight"
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const darkBtn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

let isDark = false; 

images.forEach(imgName => {
  const newImg = document.createElement('img');
  newImg.src = `./images/${imgName}`;
  newImg.alt = altTexts[imgName];
  
  newImg.addEventListener('click', () => {
    displayedImg.src = newImg.src;
    displayedImg.alt = newImg.alt;
  });
  
  thumbBar.appendChild(newImg);
});

darkBtn.addEventListener('click', () => {
  if (!isDark) {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    darkBtn.textContent = 'Lighten';
  } else {
    overlay.style.backgroundColor = 'transparent';
    darkBtn.textContent = 'Darken';
  }
  isDark = !isDark;
});
