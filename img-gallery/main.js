const imageFiles = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const altTexts = {
  "pic1.jpg": "Oeil de bébé",
  "pic2.jpg": "Rocher",
  "pic3.jpg": "Fleurs",
  "pic4.jpg": "Hieroglyphes",
  "pic5.jpg": "Papillon"
};

const bar = document.querySelector(".thumb-bar");
const img = document.querySelector(".displayed-img");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector("button");

imageFiles.forEach(file => {
  const newImage = document.createElement("img");
  newImage.src = `./images/${file}`;
  newImage.alt = altTexts[file];
  bar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    img.src = `./images/${file}`;
    img.alt = altTexts[file];
  });
});

btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.classList.remove("dark");
    btn.classList.add("light");
    btn.textContent = "Lightmode";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.classList.remove("light");
    btn.classList.add("dark");
    btn.textContent = "Darkmode";
    overlay.style.backgroundColor = "transparent";
  }
});