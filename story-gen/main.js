
const usCheckbox = document.getElementById('us');
const frCheckbox = document.getElementById('fr');

usCheckbox.addEventListener('change', function() {
  if (usCheckbox.checked) {
    frCheckbox.checked = false;
  } else if (!frCheckbox.checked) {
    usCheckbox.checked = true;
  }
});
frCheckbox.addEventListener('change', function() {
  if (frCheckbox.checked) {
    usCheckbox.checked = false;
  } else if (!usCheckbox.checked) {

    frCheckbox.checked = true;
  }
});

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

function valeurAleatoireDansTableau(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const randomize = document.querySelector('.randomize');
const storyPara = document.querySelector('.story');

randomize.addEventListener('click', genererHistoire);

function genererHistoire() {

  let temp = Math.floor(Math.random() * 100) + 1;
  let weight = Math.floor(Math.random() * 100) + 50;
  let newStory = `It was ${temp} fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs ${weight} pounds, and it was a hot day.`;


  const xItem = valeurAleatoireDansTableau(insertX);
  const yItem = valeurAleatoireDansTableau(insertY);
  const zItem = valeurAleatoireDansTableau(insertZ);
  newStory = newStory.replace(':insertx:', xItem).replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);


  const name = document.getElementById('customname').value;
  if (name !== '') {
    newStory = newStory.replace('Bob', name);
  }


  const fr = document.getElementById('fr').checked;
  if (fr) {

    const celsius = Math.round((temp - 32) * 5 / 9);

    const kg = Math.round(weight * 0.453592);
    newStory = newStory.replace(`${temp} fahrenheit`, `${celsius} celsius`);
    newStory = newStory.replace(`${weight} pounds`, `${kg} kg`);
  }

  storyPara.textContent = newStory;
  storyPara.style.visibility = 'visible';
}
