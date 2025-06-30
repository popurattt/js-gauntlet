const temp = Math.floor(Math.random() * 100);
const weight = Math.floor(Math.random() * 100) + 50;

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

const units = {
  fr: {
    temp: "°C",
    weight: "kg",
  },
  us: {
    temp: "Fahrenheit",
    weight: "pounds",
  }
};

const customName = document.getElementById('customname');
const usRadio = document.getElementById('us');
const frRadio = document.getElementById('fr');
const storyPara = document.querySelector('.story');
const generateButton = document.querySelector('.randomize');

function generateRandomStory() {
  const name = customName.value.trim() || "Bob";

  const newTemp = Math.floor(Math.random() * 100);
  const newWeight = Math.floor(Math.random() * 100) + 50;

  let story = `It was ${newTemp} :temp: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs ${newWeight} :weight:, and it was a hot day.`;

  const xItem = randomItem(insertX);
  const yItem = randomItem(insertY);
  const zItem = randomItem(insertZ);

  story = story.replaceAll(':insertx:', xItem);
  story = story.replace(':inserty:', yItem);
  story = story.replace(':insertz:', zItem);
  story = story.replace('Bob', name);

  if (frRadio.checked) {
    const tempC = Math.round((newTemp - 32) * 5 / 9);
    const weightKg = Math.round(newWeight * 0.453592);

    story = story.replace(`${newTemp} :temp:`, `${tempC} ${units.fr.temp}`);
    story = story.replace(`${newWeight} :weight:`, `${weightKg} ${units.fr.weight}`);
  } else {
    story = story.replace(`${newTemp} :temp:`, `${newTemp} ${units.us.temp}`);
    story = story.replace(`${newWeight} :weight:`, `${newWeight} ${units.us.weight}`);
  }

  storyPara.textContent = story;
  storyPara.style.visibility = 'visible';
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

generateButton.addEventListener('click', generateRandomStory);
