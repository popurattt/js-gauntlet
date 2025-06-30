const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

const units = {
    fr: { temp: "CELCIUS", weight: "KG" },
    uk: { temp: "FAHRENHEIT", weight: "POUNDS" }
};

document.addEventListener('DOMContentLoaded', function() {
    const customName = document.getElementById('customname');
    const usRadio = document.getElementById('us');
    const frRadio = document.getElementById('fr');
    const randomizeButton = document.querySelector('.randomize');
    const storyParagraph = document.querySelector('.story');

    /**
     * Retourne un élément aléatoire d'un tableau
     * @param {Array} array - Le tableau source
     * @returns {*} Un élément aléatoire du tableau
     */
    function randomValueFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Convertit les unités américaines en unités françaises si nécessaire
     * @param {number} temp - Température en Fahrenheit
     * @param {number} weight - Poids en Pounds
     * @param {boolean} isFrench - Si true, convertit en unités françaises
     * @returns {Object} Objet contenant temp et weight convertis
     */
    function convertUnits(temp, weight, isFrench) {
        if (isFrench) {
            return {
                temp: Math.round((temp - 32) * 5/9),
                weight: Math.round(weight * 0.453592)
            };
        }
        return { temp, weight };
    }

    /**
     * Génère une nouvelle histoire aléatoire avec les paramètres actuels
     * Remplace les espaces réservés, convertit les unités et utilise le nom personnalisé
     */
    function generateStory() {
        const newTemp = Math.floor(Math.random() * 100);
        const newWeight = Math.floor(Math.random() * 100) + 50;
        const isFrench = frRadio.checked;
        const convertedUnits = convertUnits(newTemp, newWeight, isFrench);
        const name = customName.value || "Bob";
        
        const randomX = randomValueFromArray(insertX);
        const randomY = randomValueFromArray(insertY);
        const randomZ = randomValueFromArray(insertZ);
        
        const unitSet = units[isFrench ? 'fr' : 'uk'];
        const newStory = `It was ${convertedUnits.temp} ${unitSet.temp} outside, so ${randomX} went for a walk. When they got to ${randomY}, they stared in horror for a few moments, then ${randomZ}. ${name} saw the whole thing, but was not surprised — ${randomX} weighs ${convertedUnits.weight} ${unitSet.weight}, and it was a hot day.`;
        
        storyParagraph.textContent = newStory;
    }

    randomizeButton.addEventListener('click', generateStory);
    generateStory(); // Histoire initiale
});
