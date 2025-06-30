import { SPAAACE } from "./planets.js";

const content = document.getElementById("content");

function createTable(title, items) {
  if (!items.length) return;

  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = title;
  table.appendChild(caption);

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const keys = Object.keys(items[0]);
  keys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  items.forEach((item) => {
    const row = document.createElement("tr");
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = item[key];
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  content.appendChild(table);
}

for (const category in SPAAACE) {
  const group = SPAAACE[category];

  if (Array.isArray(group)) {
    createTable(category, group);
  } else {
    for (const subCategory in group) {
      createTable(`${category} - ${subCategory}`, group[subCategory]);
    }
  }
}
