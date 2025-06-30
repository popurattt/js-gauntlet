const guests = [
  "Alice:7483",
  "Bob:910",
  "Charlie:6478",
  "Diana:8491",
  "Ethan:3241",
  "Fiona:1390",
  "George:8733",
  "Hannah:4415",
  "Ivan:9685",
  "Julia:3507",
  "Kevin:2108",
  "Laura:9993",
  "Michael:5279",
  "Nina:1186",
  "Oscar:2987",
  "Paula:6965",
  "Quinn:4072",
  "Rachel:9121",
  "Sam:532",
  "Tina:8946",
  "Uma:8239",
  "Victor:6021",
  "Wendy:3477",
  "Xander:1399",
  "Yara:7841",
  "Zane:3034",
  "Adam:6813",
  "Bella:4222",
  "Caleb:9225",
  "Daisy:1842",
  "Edward:5029",
  "Faith:1157",
  "Gavin:7341",
  "Hailey:869",
  "Isaac:2794",
  "Jade:9486",
  "Kyle:1647",
  "Luna:6753",
  "Mason:8615",
  "Nora:1910",
  "Owen:3085",
  "Piper:4926",
  "Quincy:2083",
  "Rose:7884",
  "Sean:4218",
  "Tara:1023",
  "Ulysses:3759",
  "Valerie:5834",
  "Will:8302",
  "Xenia:1891",
  "Yusuf:2159",
  "Zara:7268",
  "Ava:4462",
  "Brandon:6758",
  "Chloe:1324",
  "Derek:3812",
  "Ella:9334",
  "Felix:4785",
  "Grace:6970",
  "Henry:5471",
  "Isla:862",
  "Jack:2670",
  "Kara:1397",
  "Liam:2133",
  "Maya:7315",
  "Noah:5780",
  "Olivia:6947",
  "Peter:4380",
  "Queenie:1011",
  "Ryan:5406",
  "Sophie:8124",
  "Thomas:3651",
  "Ursula:824",
  "Vanessa:7833",
  "Wesley:4091",
  "Ximena:6742",
  "Yvonne:9273",
  "Zion:1890",
  "Amber:6104",
  "Brian:2341",
  "Carmen:7609",
  "Dean:3826",
  "Elsa:2106",
  "Finn:5667",
  "Gloria:8919",
  "Hugo:4740",
  "Ines:3691",
  "Jason:5462",
  "Kelsey:3208",
  "Leon:9801",
  "Mila:1934",
  "Nikolai:8856",
  "Opal:3643",
  "Phoebe:9038",
  "Reed:7112",
  "Sara:2568",
  "Trent:1610",
  "Umar:3857",
  "Violet:5794",
  "Wyatt:6992",
];
const admitted = [];
const refused = [];

window.onload = function () {
  const searchInput = document.getElementById("search");
  const searchBtn = document.querySelector("button");
  const presentation = document.getElementById("presentation");
  const admittedPara = document.querySelector(".admitted");
  const refusedPara = document.querySelector(".refused");

  function removeGuest(name) {
    const idx = guests.findIndex(
      (g) => g.split(":")[0].toLowerCase() === name.toLowerCase()
    );
    if (idx !== -1) guests.splice(idx, 1);
  }

  searchBtn.addEventListener("click", function () {
    const query = searchInput.value.trim();
    if (!query) {
      presentation.textContent = "Veuillez entrer un nom d'invité.";
      return;
    }

    const found = guests.find(
      (g) => g.split(":")[0].toLowerCase() === query.toLowerCase()
    );
    if (found) {
      const [name, tag] = found.split(":");
      presentation.innerHTML = `L'invité ${name} a été trouvé. Son tag est ${tag}. `;

      const admitBtn = document.createElement("button");
      admitBtn.textContent = "Admettre";
      const refuseBtn = document.createElement("button");
      refuseBtn.textContent = "Refuser";
      presentation.appendChild(admitBtn);
      presentation.appendChild(refuseBtn);

      admitBtn.onclick = function () {
        admitted.push({ name, tag });
        admittedPara.textContent = `Admit: ${admitted
          .map((a) => a.name + " (" + a.tag + ")")
          .join(", ")}`;
        removeGuest(name);
        presentation.textContent = "";
      };
      refuseBtn.onclick = function () {
        refused.push({ name, tag });
        refusedPara.textContent = `Refuse: ${refused
          .map((r) => r.name + " (" + r.tag + ")")
          .join(", ")}`;
        removeGuest(name);
        presentation.textContent = "";
      };
    } else {
      presentation.textContent = `L'invité ${query} n'a pas été trouvé.`;
    }
  });
};
