const imageFiles = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
];

const altTexts = {
    "pic1.jpg": "Closeup of a human eye",
    "pic2.jpg": "Rock that looks like a wave",
    "pic3.jpg": "Purple and white pansies",
    "pic4.jpg": "Section of wall from a pharaoh's tomb",
    "pic5.jpg": "Large moth on a leaf"
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

imageFiles.forEach(file => {
    const newImage = document.createElement('img');
    newImage.src = `./images/${file}`;
    newImage.alt = altTexts[file];
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImg.src = `./images/${file}`;
        displayedImg.alt = altTexts[file];
        const caption = document.querySelector('.caption');
        caption.textContent = altTexts[file];
    });
});