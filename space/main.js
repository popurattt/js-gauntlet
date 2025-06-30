import { SPAAACE } from "./planets.js";

function flattenPlanets(data) {
    const result = [];
    for (const [category, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            value.forEach(obj => result.push({ Type: category, ...obj }));
        } else if (typeof value === "object") {
            for (const [subcat, arr] of Object.entries(value)) {
                arr.forEach(obj => result.push({ Type: `${category} (${subcat})`, ...obj }));
            }
        }
    }
    return result;
}

const planets = flattenPlanets(SPAAACE);

const allKeys = new Set();
planets.forEach(obj => Object.keys(obj).forEach(k => allKeys.add(k)));
const columns = Array.from(allKeys);

function createTable(data, columns) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    columns.forEach(col => {
        const th = document.createElement('th');
        th.textContent = col;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(obj => {
        const row = document.createElement('tr');
        columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = obj[col] !== undefined ? obj[col] : '';
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    return table;
}

const contentDiv = document.getElementById('content');
contentDiv.appendChild(createTable(planets, columns));
