const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland", "the White House"];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

const storyTemplate = `It was :temp: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs :weight:, and it was a hot day.`;

const customNameInput = document.getElementById("customname");
const frCheckbox = document.getElementById("fr");
const usCheckbox = document.getElementById("us");
const storyElement = document.querySelector(".story");
const generateButton = document.querySelector(".randomize");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function convertFahrenheitToCelsius(f) {
  return Math.round(((f - 32) * 5) / 9);
}

function convertPoundsToKg(p) {
  return Math.round(p * 0.453592);
}

function handleCheckboxChange(changedCheckbox) {
  if (changedCheckbox === "us" && usCheckbox.checked) {
    frCheckbox.checked = false;
  } else if (changedCheckbox === "fr" && frCheckbox.checked) {
    usCheckbox.checked = false;
  }
}

usCheckbox.addEventListener("change", () => handleCheckboxChange("us"));
frCheckbox.addEventListener("change", () => handleCheckboxChange("fr"));

generateButton.addEventListener("click", () => {
  let newStory = storyTemplate;

  let temperature = Math.floor(Math.random() * 100);
  let weight = Math.floor(Math.random() * 100) + 50;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (frCheckbox.checked) {
    const tempCelsius = convertFahrenheitToCelsius(temperature);
    const weightKg = convertPoundsToKg(weight);
    newStory = newStory.replace(":temp:", `${tempCelsius} CELSIUS`);
    newStory = newStory.replace(":weight:", `${weightKg} KG`);
  } else {
    newStory = newStory.replace(":temp:", `${temperature} FAHRENHEIT`);
    newStory = newStory.replace(":weight:", `${weight} POUNDS`);
  }

  const customName = customNameInput.value.trim();
  if (customName !== "") {
    newStory = newStory.replace("Bob", customName);
  }

  storyElement.textContent = newStory;
  storyElement.style.visibility = "visible";
});
