import { text, insertX, insertY, insertZ } from "./text.js";

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const storyContainer = document.querySelector('.story');
const frCheckbox = document.getElementById('fr');
const usCheckbox = document.getElementById('us');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

frCheckbox.addEventListener('change', () => {
    if (frCheckbox.checked) usCheckbox.checked = false;
});
usCheckbox.addEventListener('change', () => {
    if (usCheckbox.checked) frCheckbox.checked = false;
});

function generateStory() {
    if (!frCheckbox.checked && !usCheckbox.checked) {
        storyContainer.textContent = "⚠️ Please select a unit system (US or FR) / Veuillez sélectionner un système d'unité (US ou FR).";
        storyContainer.style.visibility = 'visible';
        return;
    }

    let newStory = text;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value.trim() !== "") {
        newStory = newStory.replace('Bob', customName.value.trim());
    }

    if (frCheckbox.checked) {
        const tempF = 94;
        const tempC = Math.round((tempF - 32) * 5 / 9);
        newStory = newStory.replace('94 fahrenheit', `${tempC} Celsius`);

        const weightLb = 300;
        const weightKg = Math.round(weightLb * 0.453592);
        newStory = newStory.replace('300 pounds', `${weightKg} kg`);
    }

    storyContainer.textContent = newStory;
    storyContainer.style.visibility = 'visible';
}

randomize.addEventListener('click', generateStory);
