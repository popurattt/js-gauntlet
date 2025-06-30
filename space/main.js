import { SPAAACE } from "./planets.js";


const content = document.getElementById("content");

function createTable(title, dataArray) {
  if (!Array.isArray(dataArray) || dataArray.length === 0) return;

  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = title;
  section.appendChild(h2);

  const table = document.createElement("table");
  table.border = "1";
  table.style.marginBottom = "20px";
  table.cellPadding = "5";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const keys = Object.keys(dataArray[0]);
  for (const key of keys) {
    const th = document.createElement("th");
    th.textContent = key;
    headRow.appendChild(th);
  }
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  for (const obj of dataArray) {
    const tr = document.createElement("tr");
    for (const key of keys) {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  section.appendChild(table);
  content.appendChild(section);
}

for (const [category, value] of Object.entries(SPAAACE)) {
  if (Array.isArray(value)) {
    createTable(category, value);
  } else if (typeof value === "object") {
    for (const [subCategory, dataArray] of Object.entries(value)) {
      createTable(`${category} – ${subCategory}`, dataArray);
    }
  }
}
