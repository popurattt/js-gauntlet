const nom_fichier = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
];
const altTexts = {
  "pic1.jpg": "yeux",
  "pic2.jpg": "cailloux",
  "pic3.jpg": "fleur",
  "pic4.jpg": "tableau egypte",
  "pic5.jpg": "papillon",
};
const thumbBar = document.querySelector(".thumb-bar");
const displayedImg = document.querySelector(".displayed-img");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

nom_fichier.forEach((fileName) => {
  const newImage = document.createElement("img");
  newImage.src = `images/${fileName}`;
  newImage.alt = altTexts[fileName];
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    displayedImg.src = newImage.src;
    displayedImg.alt = newImage.alt;
  });
});

btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.classList.remove("dark");
    btn.textContent = "Obscurcir";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  } else {
    btn.classList.add("dark");
    btn.textContent = "Désobscurcir";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  }
});
