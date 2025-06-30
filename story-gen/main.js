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
        temp: "Celsius",
        weight: "kg",
    },
    us: {
        temp: "Fahrenheit",
        weight: "pounds",
    }
}

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function celsiusToFahrenheit(c) {
  return Math.round((c * 9 / 5) + 32);
}

function kgToPounds(kg) {
  return Math.round(kg / 0.453592);
}

const customName = document.getElementById('customname');
const usCheck = document.getElementById('us');
const frCheck = document.getElementById('fr');
const storyPara = document.querySelector('.story');
const randomizeBtn = document.querySelector('.randomize');

randomizeBtn.addEventListener('click', generateStory);

usCheck.addEventListener('change', function() {
  if (usCheck.checked) frCheck.checked = false;
});
frCheck.addEventListener('change', function() {
  if (frCheck.checked) usCheck.checked = false;
});

function generateStory() {
  let tempValue = Math.floor(Math.random() * 41) + 10; 
  let weightValue = Math.floor(Math.random() * 100) + 50;
  console.log(`Temp: ${tempValue}, Weight: ${weightValue}`);
  let story = `It was ${tempValue} :temp: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs ${weightValue} :weight:, and it was a hot day.`;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  story = story.replace(/:insertx:/g, xItem)
               .replace(':inserty:', yItem)
               .replace(':insertz:', zItem);

  let name = customName.value.trim();
  if (name !== "") {
    story = story.replace(/Bob/g, name);
  }

  if (usCheck.checked) {
    const tempF = celsiusToFahrenheit(tempValue);
    const weightLb = kgToPounds(weightValue);
    story = story.replace(':temp:', units.us.temp)
                 .replace(':weight:', units.us.weight)
                 .replace(`${tempValue}`, tempF)
                 .replace(`${weightValue}`, weightLb);
  } else {
    story = story.replace(':temp:', units.fr.temp)
                 .replace(':weight:', units.fr.weight);
  }

  storyPara.textContent = story;
  storyPara.style.visibility = 'visible';
}
