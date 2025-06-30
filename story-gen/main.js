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
