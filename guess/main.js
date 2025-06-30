// Variables globales
let nombreSecret;
let tentatives = 0;

// Sélection des bons éléments HTML selon ton index.html
const input = document.querySelector(".guessField");       // champ de saisie
const boutonDeviner = document.querySelector(".guessSubmit"); // bouton "Submit guess"
const messageResult = document.querySelector(".lastResult");  // affichage principal
const messageAide = document.querySelector(".lowOrHi");       // haut / bas
const messageHistorique = document.querySelector(".guesses"); // anciennes tentatives

let jeuTerminé = false;

// Génère un nombre aléatoire entre 1 et 100
function genererNombreSecret() {
  return Math.floor(Math.random() * 100) + 1;
}

// Réinitialisation du jeu
function reinitialiserJeu() {
  nombreSecret = genererNombreSecret();
  tentatives = 0;
  jeuTerminé = false;

  messageResult.textContent = "";
  messageResult.style.backgroundColor = "";
  messageAide.textContent = "";
  messageHistorique.textContent = "";

  input.disabled = false;
  boutonDeviner.disabled = false;
  input.value = "";
  input.focus();

  // Supprimer le bouton "Start new game" s’il existe
  const boutonReset = document.querySelector("#resetButton");
  if (boutonReset) boutonReset.remove();
}

// Vérifie la supposition de l'utilisateur
function verifierSupposition() {
  if (jeuTerminé) return;

  const supposition = parseInt(input.value);
  if (isNaN(supposition) || supposition < 1 || supposition > 100) {
    messageResult.textContent = "Veuillez entrer un nombre entre 1 et 100.";
    messageResult.style.backgroundColor = "orange";
    return;
  }

  tentatives++;

  if (tentatives === 1) {
    messageHistorique.textContent = "Essais précédents : ";
  }
  messageHistorique.textContent += supposition + " ";

  if (supposition === nombreSecret) {
    messageResult.textContent = `🎉 Bravo ! Vous avez deviné ${nombreSecret} en ${tentatives} tentative(s).`;
    messageResult.style.backgroundColor = "green";
    messageAide.textContent = "";
    finDuJeu();
  } else if (tentatives >= 10) {
    messageResult.textContent = `💀 Perdu ! Le nombre était ${nombreSecret}.`;
    messageResult.style.backgroundColor = "red";
    messageAide.textContent = "";
    finDuJeu();
  } else {
    messageResult.textContent = "Incorrect.";
    messageResult.style.backgroundColor = "red";
    messageAide.textContent = supposition < nombreSecret ? "Trop bas." : "Trop haut.";
  }

  input.value = "";
  input.focus();
}

function finDuJeu() {
  input.disabled = true;
  boutonDeviner.disabled = true;
  jeuTerminé = true;

  // Créer un bouton pour recommencer
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Start new game";
  resetBtn.id = "resetButton";
  document.body.appendChild(resetBtn);
  resetBtn.addEventListener("click", reinitialiserJeu);
}

// Initialisation
reinitialiserJeu();

// Événement
boutonDeviner.addEventListener("click", verifierSupposition);

