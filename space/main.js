import { SPAAACE } from "./planets.js";

const content = document.getElementById("content");

function generateTable(data, captionText) {
    const table = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = captionText;
    table.appendChild(caption);

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    data.forEach(item => {
        const row = document.createElement("tr");
        Object.values(item).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    table.style.marginBottom = "30px";
    content.appendChild(table);
}

for (const category in SPAAACE) {
    const data = SPAAACE[category];

    if (Array.isArray(data)) {
        generateTable(data, category);
    } else if (typeof data === "object") {
        for (const subCategory in data) {
            generateTable(data[subCategory], `${category} - ${subCategory}`);
        }
    }
}
