import { SPAAACE } from "./planets.js";

function createTable(data, title) {
    if (!Array.isArray(data) || data.length === 0) return null;

    const table = document.createElement("table");

    const caption = document.createElement("caption");
    caption.textContent = title;
    table.appendChild(caption);

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    Object.keys(data[0]).forEach((key) => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    data.forEach((item) => {
        const row = document.createElement("tr");
        Object.values(item).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    return table;
}

function renderTables() {
    const container = document.getElementById("content");

    Object.entries(SPAAACE).forEach(([category, value]) => {
        if (Array.isArray(value)) {
        const table = createTable(value, category);
        if (table) container.appendChild(table);
        } else if (typeof value === "object") {
        Object.entries(value).forEach(([subCategory, subValue]) => {
            const table = createTable(subValue, `${category} - ${subCategory}`);
            if (table) container.appendChild(table);
        });
        }
    });
}

document.addEventListener("DOMContentLoaded", renderTables);
