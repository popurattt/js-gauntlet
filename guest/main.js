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
];

// Éléments DOM
const [searchInput, searchButton, presentation, admittedList, refusedList, 
    actionButtons, acceptButton, rejectButton, suggestionsDiv] = [
    'search', 'button', 'presentation', '.admitted', '.refused',
    'actionButtons', 'acceptBtn', 'rejectBtn', 'suggestions'
].map(id => document.querySelector(id.includes('.') ? id : `#${id}`));

let admitted = [], refused = [], currentGuest = null;

/**
 * Recherche un invité par nom ou vérifie l'accès avec code
 * @param {string} name - Nom à rechercher
 * @param {string} [code] - Code d'accès optionnel
 * @returns {string|null} Invité trouvé ou null
 */
const findGuest = (name, code) => code 
    ? guests.find(g => {
        const [guestName, guestCode] = g.split(':');
        return guestName.toLowerCase() === name.toLowerCase() && guestCode === code;
    })?.split(':')[0]
    : guests.find(g => g.split(':')[0].toLowerCase().includes(name.toLowerCase()));

/**
 * Met à jour l'affichage des listes
 */
const displayResults = () => {
    admittedList.innerHTML = '✅ Admis : ' + (admitted.length ? admitted.join(', ') : 'Aucun');
    refusedList.innerHTML = '❌ Refusés : ' + (refused.length ? refused.join(', ') : 'Aucun');
};

/**
 * Gère l'affichage des boutons d'action
 * @param {string} [guestName] - Nom de l'invité ou undefined pour cacher
 */
const toggleActions = (guestName) => {
    currentGuest = guestName;
    actionButtons.classList.toggle('hidden', !guestName);
};

/**
 * Affiche les suggestions d'invités
 * @param {string} input - Texte saisi
 */
const showSuggestions = (input) => {
    if (!input.length) return suggestionsDiv.classList.add('hidden');
    
    const filtered = guests
        .map(g => g.split(':')[0])
        .filter(name => name.toLowerCase().includes(input.toLowerCase()))
        .sort();
    
    if (!filtered.length) return suggestionsDiv.classList.add('hidden');
    
    suggestionsDiv.innerHTML = filtered
        .map(name => `<div class="suggestion px-3 py-1 hover:bg-gray-100 cursor-pointer">${name}</div>`)
        .join('');
    
    suggestionsDiv.classList.remove('hidden');
    suggestionsDiv.querySelectorAll('.suggestion').forEach(s => 
        s.addEventListener('click', () => {
            searchInput.value = s.textContent;
            suggestionsDiv.classList.add('hidden');
            handleSearch();
        })
    );
};

/**
 * Gère la recherche et l'authentification
 */
const handleSearch = () => {
    const input = searchInput.value.trim();
    if (!input) {
        presentation.textContent = 'Veuillez entrer un nom ou un nom:code';
        return toggleActions();
    }

    const hasCode = input.includes(':');
    const [name, code] = hasCode ? input.split(':') : [input];
    const guestName = findGuest(name, code);
    
    if (hasCode) {
        if (guestName) {
            if (!admitted.includes(guestName)) {
                admitted.push(guestName);
                refused = refused.filter(g => g !== guestName);
                presentation.textContent = `✅ ${guestName} a été admis avec succès!`;
            } else {
                presentation.textContent = `${guestName} est déjà admis.`;
            }
            toggleActions();
        } else {
            if (!refused.includes(name)) {
                refused.push(name);
                presentation.textContent = `❌ Accès refusé pour ${name}`;
            } else {
                presentation.textContent = `${name} a déjà été refusé.`;
            }
            toggleActions();
        }
    } else {
        if (guestName) {
            const [gName, gCode] = guests.find(g => g.split(':')[0] === guestName).split(':');
            presentation.textContent = `Invité trouvé: ${gName} - Code: ${gCode}`;
            toggleActions(guestName);
        } else {
            presentation.textContent = `Aucun invité trouvé pour "${input}"`;
            toggleActions();
        }
    }
    displayResults();
};

/**
 * Accepte ou refuse l'invité courant
 * @param {boolean} accept - true pour accepter, false pour refuser
 */
const processGuest = (accept) => {
    if (!currentGuest) return;
    
    const list = accept ? admitted : refused;
    const otherList = accept ? refused : admitted;
    const emoji = accept ? '✅' : '❌';
    const action = accept ? 'accepté' : 'refusé';
    
    if (!list.includes(currentGuest)) {
        list.push(currentGuest);
        otherList.splice(otherList.indexOf(currentGuest), 1);
        presentation.textContent = `${emoji} ${currentGuest} a été ${action}!`;
    } else {
        presentation.textContent = `${currentGuest} est déjà ${action}.`;
    }
    toggleActions();
    displayResults();
};

// Événements
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', e => e.key === 'Enter' && handleSearch());
searchInput.addEventListener('input', e => showSuggestions(e.target.value));
acceptButton.addEventListener('click', () => processGuest(true));
rejectButton.addEventListener('click', () => processGuest(false));

displayResults();

