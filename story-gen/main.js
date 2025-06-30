const temp = Math.floor(Math.random() * 100)
const weight = Math.floor(Math.random() * 100) + 50

const insertX = [
"Willy the Goblin",
"Big Daddy",
"Father Christmas"
]

const insertY = [
"the soup kitchen",
"Disneyland",
"the White House"
]
const insertZ = [
"spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"
]

const units = {
    fr: {
        temp: "CELCIUS",
        weight: "KG",
    },
    uk: {
        temp: "FAHRENHEIT",
        weight: "POUNDS",
    }
}

const story = `It was ${temp} :temp: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs ${weight} :weight:, and it was a hot day.`

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const storyPara = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', () => {
  let newStory = story;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  let finalTemp = temp;
  let finalWeight = weight;
  let unitTemp = units.uk.temp;
  let unitWeight = units.uk.weight;

  if (document.getElementById('fr').checked) {
    finalTemp = Math.round((temp - 32) * 5 / 9);
    finalWeight = Math.round(weight * 0.453592);
    unitTemp = units.fr.temp;
    unitWeight = units.fr.weight;
  }

  newStory = newStory
    .replaceAll(':insertx:', xItem)
    .replace(':inserty:', yItem)
    .replace(':insertz:', zItem)
    .replace(':temp:', unitTemp)
    .replace(':weight:', unitWeight);

  if (customName.value !== '') {
    newStory = newStory.replace('Bob', customName.value);
  }

  storyPara.textContent = newStory.replace(weight, finalWeight).replace(temp, finalTemp);
  storyPara.style.visibility = 'visible';
});
