const temp = Math.floor(Math.random() * 100)
const weight = Math.floor(Math.random() * 100) + 50

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

const storyTemplate = `It was :temp: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs :weight:, and it was a hot day.`;

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function fahrenheitToCelsius(f) {
  return Math.round((f - 32) * 5 / 9);
}

function poundsToKg(lb) {
  return Math.round(lb * 0.453592);
}

document.querySelector('.randomize').addEventListener('click', generateStory);

function generateStory() {

  const tempF = Math.floor(Math.random() * 100) + 60; 
  const weightLb = Math.floor(Math.random() * 100) + 100;// 100-199 lbs

  let temp = `${tempF} fahrenheit`;
  let weight = `${weightLb} pounds`;


  const isFR = document.getElementById('fr').checked;
  if (isFR) {
    temp = `${fahrenheitToCelsius(tempF)} celcius`;
    weight = `${poundsToKg(weightLb)} kg`;
  }


  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);


  let newStory = storyTemplate
    .replace(':temp:', temp)
    .replace(':insertx:', xItem)
    .replace(':inserty:', yItem)
    .replace(':insertz:', zItem)
    .replace(':insertx:', xItem)
    .replace(':weight:', weight);


  const customName = document.getElementById('customname').value;
  if (customName.trim() !== '') {
    newStory = newStory.replace('Bob', customName);
  }

  const storyPara = document.querySelector('.story');
  storyPara.textContent = newStory;
  storyPara.style.visibility = 'visible';
}

const usCheckbox = document.getElementById('us');
const frCheckbox = document.getElementById('fr');


usCheckbox.addEventListener('change', function() {
  if (usCheckbox.checked) {
    frCheckbox.checked = false;
  }
});


frCheckbox.addEventListener('change', function() {
  if (frCheckbox.checked) {
    usCheckbox.checked = false;
  }
});
