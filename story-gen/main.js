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

function randomValueFromArray(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Fonction de génération
function generateStory() {
  let newStory = story;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  const name = document.getElementById('customname').value;
  if (name !== '') {
    newStory = newStory.replace('Bob', name);
  }

  // Vérifie si FR est coché
  const isFR = document.getElementById('fr').checked;
  if (isFR) {
    const tempC = Math.round((temp - 32) * 5 / 9);
    const weightKg = Math.round(weight * 0.4536);

    newStory = newStory.replace(`${temp} fahrenheit`, `${tempC} ${units.fr.temp}`);
    newStory = newStory.replace(`${weight} pounds`, `${weightKg} ${units.fr.weight}`);
  }

  const storyPara = document.querySelector('.story');
  storyPara.textContent = newStory;
  storyPara.style.visibility = 'visible';
}

// Ajoute le gestionnaire de clic
document.querySelector('.randomize').addEventListener('click', generateStory);