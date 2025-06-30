const contentDiv = document.getElementById('content');

const allCelestialBodies = [];

function addItemsToList(sourceList) {
    for (let i = 0; i < sourceList.length; i++) {
        allCelestialBodies.push(sourceList[i]);
    }
}

addItemsToList(SPAAACE["Terrestrial planets"]);
addItemsToList(SPAAACE["Jovian planets"]["Gas giants"]);
addItemsToList(SPAAACE["Jovian planets"]["Ice giants"]);
addItemsToList(SPAAACE["Dwarf planets"]);
addItemsToList(SPAAACE["Moons"]);

if (allCelestialBodies.length > 0) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');

    const headers = Object.keys(allCelestialBodies[0]);

    for (let i = 0; i < headers.length; i++) {
        const th = document.createElement('th');
        th.textContent = headers[i];
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    for (let i = 0; i < allCelestialBodies.length; i++) {
        const bodyRow = document.createElement('tr');
        const currentBody = allCelestialBodies[i];

        for (let j = 0; j < headers.length; j++) {
            const cell = document.createElement('td');
            const headerName = headers[j];
            cell.textContent = currentBody[headerName];
            bodyRow.appendChild(cell);
        }
        tbody.appendChild(bodyRow);
    }

    table.appendChild(tbody);
    contentDiv.appendChild(table);
}
