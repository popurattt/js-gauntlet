const tab = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
];

const alt = [
    "Yeux",
    "Tableau",
    "Fleurs",
    "Égypte",
    "Papillon"
];

const vignette = document.getElementsByClassName("thumb-bar")[0];
const displayedImg = document.getElementsByClassName("displayed-img")[0];
const caption = document.querySelector(".caption");
const darken = document.getElementsByClassName("dark")[0];

for (let i = 0; i < tab.length; i++) {
  const img = document.createElement("img");
  img.src = `images/${tab[i]}`;
  img.alt = alt[i];

  img.addEventListener("click", function() {
    displayedImg.src = `images/${tab[i]}`;
    displayedImg.alt = alt[i];
    caption.textContent = alt[i];
  });

  vignette.appendChild(img);
}


let isDark = false;

darken.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    displayedImg.style.filter = "brightness(50%)";
    darken.textContent = "Désobscurcir";
  } else {
    displayedImg.style.filter = "brightness(100%)";
    darken.textContent = "Obscurcir";
  }});