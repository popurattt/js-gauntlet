const guests = [
  "Alice:7483", "Bob:910", "Charlie:6478", "Diana:8491", "Ethan:3241",
  "Fiona:1390", "George:8733", "Hannah:4415", "Ivan:9685", "Julia:3507",
  "Kevin:2108", "Laura:9993", "Michael:5279", "Nina:1186", "Oscar:2987",
  "Paula:6965", "Quinn:4072", "Rachel:9121", "Sam:532", "Tina:8946",
  "Uma:8239", "Victor:6021", "Wendy:3477", "Xander:1399", "Yara:7841",
  "Zane:3034", "Adam:6813", "Bella:4222", "Caleb:9225", "Daisy:1842",
  "Edward:5029", "Faith:1157", "Gavin:7341", "Hailey:869", "Isaac:2794",
  "Jade:9486", "Kyle:1647", "Luna:6753", "Mason:8615", "Nora:1910",
  "Owen:3085", "Piper:4926", "Quincy:2083", "Rose:7884", "Sean:4218",
  "Tara:1023", "Ulysses:3759", "Valerie:5834", "Will:8302", "Xenia:1891",
  "Yusuf:2159", "Zara:7268", "Ava:4462", "Brandon:6758", "Chloe:1324",
  "Derek:3812", "Ella:9334", "Felix:4785", "Grace:6970", "Henry:5471",
  "Isla:862", "Jack:2670", "Kara:1397", "Liam:2133", "Maya:7315",
  "Noah:5780", "Olivia:6947", "Peter:4380", "Queenie:1011", "Ryan:5406",
  "Sophie:8124", "Thomas:3651", "Ursula:824", "Vanessa:7833", "Wesley:4091",
  "Ximena:6742", "Yvonne:9273", "Zion:1890", "Amber:6104", "Brian:2341",
  "Carmen:7609", "Dean:3826", "Elsa:2106", "Finn:5667", "Gloria:8919",
  "Hugo:4740", "Ines:3691", "Jason:5462", "Kelsey:3208", "Leon:9801",
  "Mila:1934", "Nikolai:8856", "Opal:3643", "Phoebe:9038", "Reed:7112",
  "Sara:2568", "Trent:1610", "Umar:3857", "Violet:5794", "Wyatt:6992"
]

const admitted = []
const refused = []

const searchInput = document.getElementById('search')
const button = document.querySelector('button')
const presentation = document.getElementById('presentation')
const admittedP = document.querySelector('.admitted')
const refusedP = document.querySelector('.refused')

const suggestionBox = document.createElement('ul')
suggestionBox.style.border = '1px solid #ccc'
suggestionBox.style.padding = '5px'
suggestionBox.style.listStyle = 'none'
suggestionBox.style.maxHeight = '150px'
suggestionBox.style.overflowY = 'auto'
suggestionBox.style.width = '300px'
suggestionBox.style.position = 'absolute'
suggestionBox.style.backgroundColor = 'white'
suggestionBox.style.marginTop = '5px'
searchInput.insertAdjacentElement('afterend', suggestionBox)

let remainingGuests = [...guests]

function renderSuggestions(tagStart) {
  suggestionBox.innerHTML = ''
  if (tagStart.length === 0) return

  const matching = remainingGuests
    .filter(g => g.split(':')[1].startsWith(tagStart))
    .sort((a, b) => a.split(':')[1].localeCompare(b.split(':')[1]))

  matching.forEach(guest => {
    const [name, tag] = guest.split(':')
    const li = document.createElement('li')
    li.textContent = `${name} (${tag})`
    li.style.cursor = 'pointer'
    li.onclick = () => {
      searchInput.value = name
      suggestionBox.innerHTML = ''
    }
    suggestionBox.appendChild(li)
  })
}

searchInput.addEventListener('input', () => {
  renderSuggestions(searchInput.value.trim())
})

button.addEventListener('click', () => {
  const searchName = searchInput.value.trim().toLowerCase()
  presentation.innerHTML = ''
  suggestionBox.innerHTML = ''

  if (!searchName) return

  const found = remainingGuests.find(g => g.split(':')[0].toLowerCase() === searchName)

  if (found) {
    const [name, tag] = found.split(':')
    presentation.innerHTML = `L'invité <strong>${name}</strong> a été trouvé. Son tag est <strong>${tag}</strong>. `

    const admitBtn = document.createElement('button')
    admitBtn.textContent = 'Admettre'
    admitBtn.onclick = () => {
      admitted.push(name + ':' + tag)
      admittedP.innerHTML += ` ${name} (${tag}) `
      removeFromList(name)
      presentation.innerHTML = ''
    }

    const refuseBtn = document.createElement('button')
    refuseBtn.textContent = 'Refuser'
    refuseBtn.onclick = () => {
      refused.push(name + ':' + tag)
      refusedP.innerHTML += ` ${name} (${tag}) `
      removeFromList(name)
      presentation.innerHTML = ''
    }

    presentation.appendChild(admitBtn)
    presentation.appendChild(refuseBtn)

  } else {
    presentation.textContent = `L'invité ${searchInput.value} n'a pas été trouvé.`
  }

  searchInput.value = ''
})

function removeFromList(name) {
  const index = remainingGuests.findIndex(g => g.split(':')[0] === name)
  if (index !== -1) {
    remainingGuests.splice(index, 1)
  }
}
