window.addEventListener('DOMContentLoaded', function() {
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


function parseGuest(str) {
    const [name, tag] = str.split(":");
    return { name, tag };
}
function getAvailableGuests() {
    
    return guests.filter(g =>
        !admitted.includes(g) && !refused.includes(g)
    );
}
function findGuestByName(name) {
    const lower = name.trim().toLowerCase();
    return getAvailableGuests().find(g => parseGuest(g).name.toLowerCase() === lower);
}
function findGuestByTagFragment(fragment) {
    const frag = fragment.trim();
    if (!frag) return [];
    return getAvailableGuests()
        .map(parseGuest)
        .filter(g => g.tag.startsWith(frag))
        .sort((a, b) => a.tag.localeCompare(b.tag));
}


const searchInput = document.getElementById('search');
const searchBtn = document.querySelector('button');
const presentation = document.getElementById('presentation');
const admittedP = document.querySelector('.admitted');
const refusedP = document.querySelector('.refused');


let suggestionList = null;
function ensureSuggestionList() {
    if (!suggestionList) {
        suggestionList = document.createElement('ul');
        suggestionList.style.listStyle = 'none';
        suggestionList.style.padding = '0';
        suggestionList.style.margin = '0.5em 0';
        suggestionList.id = 'suggestions';
        searchInput.parentNode.insertBefore(suggestionList, presentation);
    }
    suggestionList.innerHTML = '';
}


function showResult() {
    presentation.innerHTML = '';
    ensureSuggestionList();
    suggestionList.innerHTML = '';
    const name = searchInput.value.trim();
    if (!name) return;
    const guestStr = findGuestByName(name);
    if (guestStr) {
        const { name: guestName, tag } = parseGuest(guestStr);
        presentation.textContent = `L'invité ${guestName} a été trouvé. Son tag est ${tag}. `;
        
        const admitBtn = document.createElement('button');
        admitBtn.textContent = 'Admettre';
        admitBtn.onclick = () => {
            admitted.push(guestStr);
            updateAdmitted();
            presentation.textContent = '';
            searchInput.value = '';
            suggestionList.innerHTML = '';
        };
        const refuseBtn = document.createElement('button');
        refuseBtn.textContent = 'Refuser';
        refuseBtn.onclick = () => {
            refused.push(guestStr);
            updateRefused();
            presentation.textContent = '';
            searchInput.value = '';
            suggestionList.innerHTML = '';
        };
        presentation.appendChild(admitBtn);
        presentation.appendChild(refuseBtn);
    } else {
        presentation.textContent = `L'invité ${name} n'a pas été trouvé.`;
    }
}


function updateAdmitted() {
    admittedP.textContent = 'Admit: ' + admitted.map(g => {
        const { name, tag } = parseGuest(g);
        return `${name} (${tag})`;
    }).join(', ');
}
function updateRefused() {
    refusedP.textContent = 'Refuse: ' + refused.map(g => {
        const { name, tag } = parseGuest(g);
        return `${name} (${tag})`;
    }).join(', ');
}


function showSuggestions() {
    ensureSuggestionList();
    suggestionList.innerHTML = '';
    const frag = searchInput.value.trim();
    if (!frag) return;
    const suggestions = findGuestByTagFragment(frag);
    suggestions.forEach(g => {
        const li = document.createElement('li');
        li.style.cursor = 'pointer';
        li.textContent = `${g.name} (${g.tag})`;
        li.onclick = () => {
            searchInput.value = g.name;
            suggestionList.innerHTML = '';
            showResult();
        };
        suggestionList.appendChild(li);
    });
}


searchBtn.addEventListener('click', showResult);
searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') showResult();
});
});
