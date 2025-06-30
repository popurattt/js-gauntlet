import { SPAAACE } from "./planets.js";

function extractAllObjects(data) {
  let result = [];
  if (Array.isArray(data)) {
    data.forEach(item => {
      if (typeof item === 'object' && item !== null) {
        result.push(item);
      }
    });
  } else if (typeof data === 'object' && data !== null) {
    Object.values(data).forEach(val => {
      result = result.concat(extractAllObjects(val));
    });
  }
  return result;
}

document.addEventListener('DOMContentLoaded', function() {
  const allPlanets = extractAllObjects(SPAAACE);
  const allKeys = Array.from(new Set(allPlanets.flatMap(obj => Object.keys(obj))));
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  allKeys.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  allPlanets.forEach(obj => {
    const tr = document.createElement('tr');
    allKeys.forEach(key => {
      const td = document.createElement('td');
      td.textContent = obj[key] !== undefined ? obj[key] : '';
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  document.getElementById('content').appendChild(table);
});
