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

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function fahrenheitToCelsius(f) {
    return Math.round((f - 32) * 5 / 9);
}

function poundsToKg(lb) {
    return Math.round(lb * 0.453592);
}

function generateStory() {
    const temp = Math.floor(Math.random() * 100);
    const weight = Math.floor(Math.random() * 100) + 50;

    const xItem = randomFromArray(insertX);
    const yItem = randomFromArray(insertY);
    const zItem = randomFromArray(insertZ);

    let tempValue = temp;
    let tempUnit = units.uk.temp;
    let weightValue = weight;
    let weightUnit = units.uk.weight;

    const isFR = document.getElementById('fr').checked;
    if (isFR) {
        tempValue = fahrenheitToCelsius(temp);
        tempUnit = units.fr.temp;
        weightValue = poundsToKg(weight);
        weightUnit = units.fr.weight;
    }

    let storyText = `It was ${tempValue} ${tempUnit} outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs ${weightValue} ${weightUnit}, and it was a hot day.`;

    storyText = storyText
        .replace(/:insertx:/g, xItem)
        .replace(':inserty:', yItem)
        .replace(':insertz:', zItem);

    const customName = document.getElementById('customname').value.trim();
    if (customName) {
        storyText = storyText.replace('Bob', customName);
    }

    const storyPara = document.querySelector('.story');
    storyPara.textContent = storyText;
    storyPara.style.visibility = 'visible';
}

document.querySelector('.randomize').addEventListener('click', generateStory);


document.getElementById('fr').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('us').checked = false;
    }
});
document.getElementById('us').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('fr').checked = false;
    }
});
