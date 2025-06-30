const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altTexts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'A rock that looks like a wave',
  'pic3.jpg' : 'Purple and white flowers',
  'pic4.jpg' : 'Egyptian paintings',
  'pic5.jpg' : 'A large moth'
}

for (const filename of imageFilenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', altTexts[filename]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', e => {
    displayedImg.setAttribute('src', e.target.getAttribute('src'));
    displayedImg.setAttribute('alt', e.target.getAttribute('alt'));
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
