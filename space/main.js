import { SPAAACE } from "./planets.js";
console.log(SPAAACE)
let arr = [];
for (let k in SPAAACE) {
  if (Array.isArray(SPAAACE[k])) arr = arr.concat(SPAAACE[k]);
  else for (let sub in SPAAACE[k]) arr = arr.concat(SPAAACE[k][sub]);
}
let keys = Object.keys(arr[0]);
let html = '<table><tr>' + keys.map(k=>`<th>${k}</th>`).join('') + '</tr>';
arr.forEach(obj => {
  html += '<tr>' + keys.map(k=>`<td>${obj[k]??''}</td>`).join('') + '</tr>';
});
html += '</table>';
document.getElementById('content').innerHTML = html;
