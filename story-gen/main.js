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
        temp: "CELSIUS",
        weight: "KG",
    },
    uk: {
        temp: "FAHRENHEIT",
        weight: "POUNDS",
    }
};

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const storyParagraph = document.querySelector('.story');
const frRadio = document.getElementById('fr');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  const temp = Math.floor(Math.random() * 100);
  const weight = Math.floor(Math.random() * 100) + 50;
  
  let newStory = 'It was :temp: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs :weight:, and it was a hot day.';

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    newStory = newStory.replace('Bob', customName.value);
  }

  if (frRadio.checked) {
    const tempCelsius = Math.round((temp - 32) * 5 / 9);
    const weightKg = Math.round(weight * 0.453592);
    newStory = newStory.replace(':temp:', `${tempCelsius} ${units.fr.temp}`);
    newStory = newStory.replace(':weight:', `${weightKg} ${units.fr.weight}`);
  } else {
    newStory = newStory.replace(':temp:', `${temp} ${units.uk.temp}`);
    newStory = newStory.replace(':weight:', `${weight} ${units.uk.weight}`);
  }

  storyParagraph.textContent = newStory;
  storyParagraph.style.visibility = 'visible';
}
