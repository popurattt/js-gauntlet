const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function fahrenheitToCelsius(f) {
  return Math.round(((f - 32) * 5) / 9);
}

function poundsToKg(lb) {
  return Math.round(lb * 0.453592);
}

document.querySelector(".randomize").addEventListener("click", generateStory);

function generateStory() {
  const customName = document.getElementById("customname").value.trim();
  const isFrench = document.getElementById("fr").checked;

  const temp = Math.floor(Math.random() * 100) + 30;
  const weight = Math.floor(Math.random() * 100) + 100;

  let story = `It was ${temp} fahrenheit outside, so :insertx: went for a walk. 
When they got to :inserty:, they stared in horror for a few moments, then :insertz:. 
Bob saw the whole thing, but was not surprised — :insertx: weighs ${weight} pounds, and it was a hot day.`;

  const xItem = randomPick(insertX);
  const yItem = randomPick(insertY);
  const zItem = randomPick(insertZ);

  story = story.replace(/:insertx:/g, xItem);
  story = story.replace(":inserty:", yItem);
  story = story.replace(":insertz:", zItem);

  if (customName !== "") {
    story = story.replace(/Bob/g, customName);
  }

  if (isFrench) {
    story = story.replace(/(\d+)\s*fahrenheit/, (_, f) => {
      return `${fahrenheitToCelsius(parseInt(f))} centigrade`;
    });

    story = story.replace(/weighs\s+(\d+)\s*pounds/, (_, p) => {
      return `weighs ${poundsToKg(parseInt(p))} kg`;
    });
  }

  const storyPara = document.querySelector(".story");
  storyPara.textContent = story;
  storyPara.style.visibility = "visible";
}
