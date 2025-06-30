
const images = [
  { file: "pic1.jpg", alt: "Closeup of a human eye" },
  { file: "pic2.jpg", alt: "Rock that looks like a wave" },
  { file: "pic3.jpg", alt: "Purple and white pansies" },
  { file: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { file: "pic5.jpg", alt: "Large moth on a leaf" }
];

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');

images.forEach(({file, alt}) => {
  const img = document.createElement('img');
  img.src = `./images/${file}`;
  img.alt = alt;
  img.style.cursor = 'pointer';
  img.onclick = () => {
    displayedImg.src = `./images/${file}`;
    displayedImg.alt = alt;
  };
  thumbBar.appendChild(img);
});

btn.onclick = () => {
  const dark = btn.classList.toggle('dark');
  btn.classList.toggle('light');
  overlay.style.backgroundColor = dark ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)';
  btn.textContent = dark ? 'Darken' : 'Lighten';
};
