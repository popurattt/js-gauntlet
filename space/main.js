import { SPAAACE } from "./planets.js";

function createTable(objects, title) {
  if (!Array.isArray(objects) || objects.length === 0) return "";
  const keys = Object.keys(objects[0]);
  let html = `<h2>${title}</h2><table><thead><tr>`;
  for (const key of keys) {
    html += `<th>${key}</th>`;
  }
  html += `</tr></thead><tbody>`;
  for (const obj of objects) {
    html += "<tr>";
    for (const key of keys) {
      html += `<td>${obj[key]}</td>`;
    }
    html += "</tr>";
  }
  html += "</tbody></table>";
  return html;
}

function renderTables(data, parentTitle = "") {
  let html = "";
  for (const key in data) {
    const value = data[key];
    if (Array.isArray(value)) {
      html += createTable(value, parentTitle ? parentTitle + " - " + key : key);
    } else if (typeof value === "object") {
      html += renderTables(value, key);
    }
  }
  return html;
}

document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = renderTables(SPAAACE);
});
