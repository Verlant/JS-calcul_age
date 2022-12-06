let today = new Date();

const BTN_YEAR = document.createElement("button");

document.body.append(BTN_YEAR);

BTN_YEAR.textContent =
  "Cliquez ici pour connaitre votre âge à partir de votre année de naissance !";

BTN_YEAR.addEventListener("click", (e) => {
  let age;
  do {
    age = Number(prompt("Quelle est votre année de naissance ?"));
  } while (
    isNaN(age) ||
    age < today.getFullYear() - 150 ||
    age > today.getFullYear()
  );
  alert("Vous avez " + (today.getFullYear() - age) + " ans !");
});

const NEW_BR_A = document.createElement("br");
const NEW_BR_B = document.createElement("br");

document.body.append(NEW_BR_A);
document.body.append(NEW_BR_B);

const BTN_DATE = document.createElement("button");
document.body.append(BTN_DATE);

BTN_DATE.textContent =
  "Cliquez ici pour connaitre votre âge à partir de votre date de naissance !";

BTN_DATE.addEventListener("click", (e) => {
  let age, age_array, jour, mois, annee;
  do {
    age = prompt(
      "Quelle est votre année de naissance ?\nUtilisez le format jour/mois/annee.\nExemple : 25/06/1994"
    );
    age_array = age.split("/");
    jour = age_array[0];
    mois = age_array[1];
    annee = age_array[2];
  } while (
    !(jour.length == 2) ||
    !(mois.length == 2) ||
    !(annee.length == 4) ||
    isNaN(jour) ||
    isNaN(mois) ||
    isNaN(annee) ||
    jour > 31 ||
    mois > 12 ||
    annee < today.getFullYear() - 150 ||
    annee > today.getFullYear()
  );
  console.log("jour naissance = " + jour);
  console.log("mois naissance = " + mois);
  console.log("annee naissance = " + annee);
  console.log("jour = " + today.getDate());
  console.log("mois = " + (today.getMonth() + 1));
  console.log("annee = " + today.getFullYear());

  if (today.getMonth() + 1 < mois) {
    age = today.getFullYear() - Number(annee) - 1;
  } else if (today.getDate() < jour && today.getMonth() + 1 == mois) {
    age = today.getFullYear() - Number(annee) - 1;
  } else {
    age = today.getFullYear() - Number(annee);
  }
  alert("Vous avez " + age + " ans !");
});

console.log(
  new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
  }).format(today)
);

console.log(
  new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
  })
    .format(today)
    .slice(length - 4)
);
console.log();
console.log(today.toLocaleDateString());
