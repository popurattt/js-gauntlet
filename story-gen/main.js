const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const storyParagraph = document.querySelector('.story');
const checkboxFR = document.getElementById('fr');
const checkboxUS = document.getElementById('us');

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

function randomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateStory() {
  const onlyFR = checkboxFR.checked && !checkboxUS.checked;
  const onlyUS = checkboxUS.checked && !checkboxFR.checked;

  if (!onlyFR && !onlyUS) {
    storyParagraph.textContent = "Valider une des deux langues :)";
    storyParagraph.style.visibility = 'visible';
    return;
  }

  const tempF = Math.floor(Math.random() * 100) + 30;
  const weightLb = Math.floor(Math.random() * 100) + 150;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  let name = 'Bob';
  if (customName.value.trim() !== '') {
    name = customName.value.trim();
  }

  let temp = `${tempF} fahrenheit`;
  let weight = `${weightLb} pounds`;

  if (onlyFR) {
    const tempC = Math.round((tempF - 32) * 5 / 9);
    const weightKg = Math.round(weightLb * 0.453592);
    temp = `${tempC}°C`;
    weight = `${weightKg} kg`;
  }

const newStory = `${xItem} went to ${yItem} and ${zItem}. ${name} saw it all.`;

  storyParagraph.textContent = newStory;
  storyParagraph.style.visibility = 'visible';
}

randomize.addEventListener('click', generateStory);