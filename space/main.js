import { SPAAACE } from "./planets.js";


function flattenPlanetsData(data) {
  let all = [];
  for (const key in data) {
    if (Array.isArray(data[key])) {
      all = all.concat(data[key]);
    } else if (typeof data[key] === "object") {
      for (const subkey in data[key]) {
        all = all.concat(data[key][subkey]);
      }
    }
  }
  return all;
}


function getAllKeys(objects) {
  const keys = new Set();
  objects.forEach(obj => {
    Object.keys(obj).forEach(k => keys.add(k));
  });
  return Array.from(keys);
}


function createTable(objects) {
  const keys = getAllKeys(objects);
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  keys.forEach(key => {
    const th = document.createElement("th");
    th.textContent = key;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  objects.forEach(obj => {
    const row = document.createElement("tr");
    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = obj[key] !== undefined ? obj[key] : "";
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  return table;
}


const allObjects = flattenPlanetsData(SPAAACE);
const table = createTable(allObjects);
document.getElementById("content").appendChild(table);
