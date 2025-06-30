import { SPAAACE } from "./planets.js";
console.log(SPAAACE)

const content = document.getElementById('content');

for (const category in SPAAACE) {
  const catData = SPAAACE[category];

  if (Array.isArray(catData)) {
    const title = document.createElement('h2');
    title.textContent = category;
    content.appendChild(title);

    const table = document.createElement('table');
    const firstItem = catData[0];

    const headerRow = document.createElement('tr');
    for (const key in firstItem) {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (const item of catData) {
      const row = document.createElement('tr');
      for (const key in item) {
        const td = document.createElement('td');
        td.textContent = item[key];
        row.appendChild(td);
      }
      table.appendChild(row);
    }

    content.appendChild(table);

  } else {
    for (const subCat in catData) {
      const title = document.createElement('h2');
      title.textContent = `${category} - ${subCat}`;
      content.appendChild(title);

      const subData = catData[subCat];
      const table = document.createElement('table');
      const firstItem = subData[0];

      const headerRow = document.createElement('tr');
      for (const key in firstItem) {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
      }
      table.appendChild(headerRow);

      for (const item of subData) {
        const row = document.createElement('tr');
        for (const key in item) {
          const td = document.createElement('td');
          td.textContent = item[key];
          row.appendChild(td);
        }
        table.appendChild(row);
      }

      content.appendChild(table);
    }
  }
}