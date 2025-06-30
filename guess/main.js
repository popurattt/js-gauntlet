const guessSubmit = document.getElementsByClassName("guessSubmit")[0];

let randomNum = Math.floor(Math.random() * 100); 
console.log(randomNum);

const text = document.getElementById("guessField");

const btn = document.createElement("button");
btn.innerHTML = "Réinitialiser";

const li = document.createElement("li");
li.style.listStyle = "none";

const li2 = document.createElement("li");
li2.style.listStyle = "none";
li2.style.color = "red";

const li3 = document.createElement("li");
li3.style.listStyle = "none";
li3.style.color = "green";

document.body.appendChild(li);
document.body.appendChild(li2);
document.body.appendChild(li3); 
document.body.appendChild(btn);

let acc = 0;

guessSubmit.addEventListener("click", function () {
    const userGuess = text.value; 

    acc++;
    li.innerHTML = `Nombre de tentatives : ${acc}`;

    if (userGuess > randomNum) {
        li2.innerHTML = "Votre supposition est trop élevée";
        li3.innerHTML = "";
    } else if (userGuess < randomNum) {
        li2.innerHTML = "Votre supposition est trop basse";
        li3.innerHTML = "";
    } else {
        li2.innerHTML = "";
        li3.innerHTML = `Vous avez deviné le nombre ${randomNum} en ${acc} tentatives.`;
    }
});

btn.addEventListener("click", function () {
    acc = 0;
    randomNum = Math.floor(Math.random() * 100); 
    li.innerHTML = `Nombre de tentatives : 0`;
    li2.innerHTML = "";
    li3.innerHTML = "";
    text.value = "";
    text.focus();
    console.log("Nouveau nombre :", randomNum);
});
