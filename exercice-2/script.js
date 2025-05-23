const conteneur = document.getElementById(`conteneur`);
const nouveauUl = document.createElement(`liste`);
conteneur.appendChild(nouveauUl);

const element1 = document.createElement(`li`);
element1.textContent = `Apprendre Javascript`;

const element2 = document.createElement(`li`);
element2.textContent = `Pratiquer la manipulation du DOM`;

const element3 = document.createElement(`li`);
element3.textContent = `Créer un projet`;

nouveauUl.appendChild(element1);
nouveauUl.appendChild(element2);
nouveauUl.appendChild(element3);



