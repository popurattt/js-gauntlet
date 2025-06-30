const images = [
  "pic1.jpg",
  "pic2.jpg", 
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg"
];

const altText = {
  "pic1.jpg": "Closeup of a human eye",
  "pic2.jpg": "Rock that looks like a wave",
  "pic3.jpg": "Purple and white pansies",
  "pic4.jpg": "Section of wall from a pharoah's tomb",
  "pic5.jpg": "Large moth on a leaf"
};

const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

images.forEach(imageName => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imageName}`);
  newImage.setAttribute('alt', altText[imageName]);
  thumbBar.appendChild(newImage);
  
  newImage.addEventListener('click', function() {
    displayedImg.setAttribute('src', this.getAttribute('src'));
    displayedImg.setAttribute('alt', this.getAttribute('alt'));
  });
});

btn.addEventListener('click', function() {
  const currentBg = overlay.style.backgroundColor;
  if (currentBg === 'rgba(0, 0, 0, 0.5)' || currentBg === 'rgba(0,0,0,0.5)') {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
});
