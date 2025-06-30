import { text, insertX, insertY, insertZ } from './text.js'

const content = document.getElementById('content')
const button = document.getElementById('generate')
const nameInput = document.getElementById('name')
const frCheckbox = document.getElementById('fr')

const units = {
  fr: {
    temp: "Celsius",
    weight: "kg"
  },
  uk: {
    temp: "Fahrenheit",
    weight: "pounds"
  }
}

function randomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function convertToCelsius(f) {
  return Math.round((f - 32) * 5 / 9)
}

function convertToKg(pounds) {
  return Math.round(pounds / 2.2046)
}

function generateStory() {
  const tempF = Math.floor(Math.random() * 100)
  const weightPounds = Math.floor(Math.random() * 100) + 50

  const xItem = randomValue(insertX)
  const yItem = randomValue(insertY)
  const zItem = randomValue(insertZ)

  let newStory = text
    .replace(/:insertx:/g, xItem)
    .replace(/:inserty:/g, yItem)
    .replace(/:insertz:/g, zItem)

  const customName = nameInput.value.trim()
  if (customName !== "") {
    newStory = newStory.replace("Bob", customName)
  }

  let temperature = tempF
  let weight = weightPounds
  let tempUnit = units.uk.temp
  let weightUnit = units.uk.weight

  if (frCheckbox.checked) {
    temperature = convertToCelsius(tempF)
    weight = convertToKg(weightPounds)
    tempUnit = units.fr.temp
    weightUnit = units.fr.weight
  }

  newStory = newStory
    .replace(":temp:", tempUnit)
    .replace(":weight:", weightUnit)
    .replace(tempF, temperature)
    .replace(weightPounds, weight)

  content.textContent = newStory
}

button.addEventListener('click', generateStory)
