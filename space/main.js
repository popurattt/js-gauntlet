import { SPAAACE } from "./planets.js";
console.log(SPAAACE)


function createTable(data, title) {
  if (!data.length) return null;

  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = title;
  table.appendChild(caption);

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Obtenir les clés des colonnes à partir du premier objet
  const keys = Object.keys(data[0]);

  keys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  data.forEach((item) => {
    const row = document.createElement("tr");
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = item[key];
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  return table;
}

function renderTables() {
  const contentDiv = document.getElementById("content");

  Object.entries(SPAAACE).forEach(([category, group]) => {
    if (Array.isArray(group)) {
      const table = createTable(group, category);
      if (table) contentDiv.appendChild(table);
    } else if (typeof group === "object") {
      Object.entries(group).forEach(([subgroup, data]) => {
        const table = createTable(data, `${category} - ${subgroup}`);
        if (table) contentDiv.appendChild(table);
      });
    }
  });
}

renderTables();

