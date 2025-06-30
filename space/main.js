import { SPAAACE } from "./planets.js";

const container = document.getElementById("content");

function createTable(dataArray, title) {
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  heading.textContent = title;
  section.appendChild(heading);

  const table = document.createElement("table");
  table.border = "1";
  table.style.borderCollapse = "collapse";
  table.style.marginBottom = "20px";

  if (dataArray.length === 0) return;

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  Object.keys(dataArray[0]).forEach(key => {
    const th = document.createElement("th");
    th.textContent = key;
    th.style.padding = "5px";
    th.style.backgroundColor = "#eee";
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  dataArray.forEach(obj => {
    const row = document.createElement("tr");
    Object.values(obj).forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      td.style.padding = "5px";
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  section.appendChild(table);
  container.appendChild(section);
}

Object.entries(SPAAACE).forEach(([category, content]) => {
  if (Array.isArray(content)) {
    createTable(content, category);
  } else if (typeof content === "object") {
    Object.entries(content).forEach(([subCategory, planets]) => {
      createTable(planets, `${category} - ${subCategory}`);
    });
  }
});
