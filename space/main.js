import { SPAAACE } from "./planets.js";

/**
 * Crée un tableau HTML dynamique à partir des données des planètes
 * @param {Object} data - L'objet SPAAACE contenant toutes les données des planètes
 * @returns {string} Le HTML du tableau généré
 */
function createTableFromData(data) {
    const allPlanets = [
        ...(data["Terrestrial planets"] || []),
        ...(data["Jovian planets"]?.["Gas giants"] || []),
        ...(data["Jovian planets"]?.["Ice giants"] || []),
        ...(data["Dwarf planets"] || []),
        ...(data["Moons"] || [])
    ];
    
    if (allPlanets.length === 0) return "<p>Aucune donnée disponible</p>";
    
    const columns = Object.keys(allPlanets[0]);
    let tableHTML = '<table border="1" style="border-collapse: collapse; width: 100%; margin-top: 20px;">';
    
    tableHTML += '<thead><tr>' + 
        columns.map(col => `<th style="padding: 10px; background-color: #f2f2f2; text-align: left;">${col}</th>`).join('') + 
        '</tr></thead>';
    
    tableHTML += '<tbody>' + 
        allPlanets.map(planet => 
            '<tr>' + columns.map(col => 
                `<td style="padding: 8px; border: 1px solid #ddd;">${planet[col] || ''}</td>`
            ).join('') + '</tr>'
        ).join('') + 
        '</tbody></table>';
    
    return tableHTML;
}

/**
 * Initialise l'application en créant et insérant le tableau dans le DOM
 */
document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.innerHTML = createTableFromData(SPAAACE);
    } else {
        console.error('Div avec l\'ID "content" non trouvée');
    }
});
