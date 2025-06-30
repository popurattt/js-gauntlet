import { SPAAACE } from "./planets.js";

function createTable(data) {
  const contentDiv = document.getElementById("content");

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  let columns = [];
  for (const category in data) {
    if (Array.isArray(data[category])) {
      if (data[category].length > 0) {
        columns = Object.keys(data[category][0]);
        break;
      }
    } else if (typeof data[category] === "object") {
      for (const subCategory in data[category]) {
        if (
          Array.isArray(data[category][subCategory]) &&
          data[category][subCategory].length > 0
        ) {
          columns = Object.keys(data[category][subCategory][0]);
          break;
        }
      }
      if (columns.length > 0) break;
    }
  }

  columns.unshift("Category");

  columns.forEach((column) => {
    const th = document.createElement("th");
    th.textContent = column;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (const category in data) {
    if (Array.isArray(data[category])) {
      data[category].forEach((item) => {
        const row = document.createElement("tr");

        const categoryCell = document.createElement("td");
        categoryCell.textContent = category;
        row.appendChild(categoryCell);

        columns.slice(1).forEach((column) => {
          const cell = document.createElement("td");
          cell.textContent = item[column] || "";
          row.appendChild(cell);
        });

        tbody.appendChild(row);
      });
    } else if (typeof data[category] === "object") {
      for (const subCategory in data[category]) {
        if (Array.isArray(data[category][subCategory])) {
          data[category][subCategory].forEach((item) => {
            const row = document.createElement("tr");

            const categoryCell = document.createElement("td");
            categoryCell.textContent = `${category} - ${subCategory}`;
            row.appendChild(categoryCell);

            columns.slice(1).forEach((column) => {
              const cell = document.createElement("td");
              cell.textContent = item[column] || "";
              row.appendChild(cell);
            });

            tbody.appendChild(row);
          });
        }
      }
    }
  }

  table.appendChild(tbody);

  contentDiv.appendChild(table);
}

document.addEventListener("DOMContentLoaded", () => {
  createTable(SPAAACE);
});
