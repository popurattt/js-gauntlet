const SPAAACE = [
    { name: "Mars", type: "Planet", moons: 2 },
    { name: "Europa", type: "Moon", moons: 0 },
    { name: "Jupiter", type: "Planet", moons: 79 },
    { name: "Pluto", type: "Dwarf Planet", moons: 5 }
  ];
  
  const contentDiv = document.getElementById("content");
  
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  
  const keys = Object.keys(SPAAACE[0]);
  keys.forEach(key => {
    const th = document.createElement("th");
    th.textContent = key;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    th.style.backgroundColor = "#eee";
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  const tbody = document.createElement("tbody");
  SPAAACE.forEach(obj => {
    const row = document.createElement("tr");
    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  
  contentDiv.appendChild(table);
  