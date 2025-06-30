const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const usCheckbox = document.getElementById('us');
const frCheckbox = document.getElementById('fr');

const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

const baseStory = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function convertFahrenheitToCelsius(f) {
    return Math.round((f - 32) * 5 / 9);
}

function convertPoundsToKg(p) {
    return Math.round(p * 0.453592);
}

usCheckbox.addEventListener('change', () => {
    if (usCheckbox.checked) frCheckbox.checked = false;
});
frCheckbox.addEventListener('change', () => {
    Checkbox.checked = false;
});

randomize.addEventListener('click', () => {
    let newStory = baseStory;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value.trim() !== '') {
        newStory = newStory.replace('Bob', customName.value.trim());
    }

    if (frCheckbox.checked) {
        newStory = newStory.replace('94 fahrenheit', `${convertFahrenheitToCelsius(94)} Celsius`);
        newStory = newStory.replace('300 pounds', `${convertPoundsToKg(300)} kg`);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
});
