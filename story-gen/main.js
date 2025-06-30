const customName = document.getElementById("customname");
const randomizeButton = document.querySelector(".randomize");
const storyParagraph = document.querySelector(".story");
const usRadio = document.getElementById("us");
const frRadio = document.getElementById("fr");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland", "the White House"];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

const units = {
  fr: {
    temp: "CELSIUS",
    weight: "KG",
  },
  us: {
    temp: "FAHRENHEIT",
    weight: "POUNDS",
  },
};

const baseStoryTemplate = `It was :temp_val: :temp_unit: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs :weight_val: :weight_unit:, and it was a hot day.`;

randomizeButton.addEventListener("click", generateStory);

function generateStory() {
  let newStory = baseStoryTemplate;

  const initialTempFahrenheit = Math.floor(Math.random() * 100);
  const initialWeightPounds = Math.floor(Math.random() * 100) + 50;

  const randomX = randomValueFromArray(insertX);
  const randomY = randomValueFromArray(insertY);
  const randomZ = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, randomX);
  newStory = newStory.replace(/:inserty:/g, randomY);
  newStory = newStory.replace(/:insertz:/g, randomZ);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  let finalTempVal;
  let finalTempUnit;
  let finalWeightVal;
  let finalWeightUnit;

  if (frRadio.checked) {
    finalTempVal = Math.round(((initialTempFahrenheit - 32) * 5) / 9);
    finalTempUnit = units.fr.temp;

    finalWeightVal = Math.round(initialWeightPounds / 2.20462);
    finalWeightUnit = units.fr.weight;
  } else {
    finalTempVal = initialTempFahrenheit;
    finalTempUnit = units.us.temp;

    finalWeightVal = initialWeightPounds;
    finalWeightUnit = units.us.weight;
  }

  newStory = newStory.replace(":temp_val:", finalTempVal);
  newStory = newStory.replace(":temp_unit:", finalTempUnit);
  newStory = newStory.replace(":weight_val:", finalWeightVal);
  newStory = newStory.replace(":weight_unit:", finalWeightUnit);

  storyParagraph.textContent = newStory;
  storyParagraph.style.visibility = "visible";
}
