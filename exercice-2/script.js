// const conteneur = document.getElementById(`conteneur`);
// const nouveauUl = document.createElement(`liste`);
// conteneur.appendChild(nouveauUl);

// const element1 = document.createElement(`li`);
// element1.textContent = `Apprendre Javascript`;

// const element2 = document.createElement(`li`);
// element2.textContent = `Pratiquer la manipulation du DOM`;

// const element3 = document.createElement(`li`);
// element3.textContent = `Créer un projet`;

// nouveauUl.appendChild(element1);
// nouveauUl.appendChild(element2);
// nouveauUl.appendChild(element3);


// correction  ci dessous.
const container = document.querySelector(`#conteneur`);

const ul = document.createElement(`ul`);

const todoList = [`Apprendre Javascript`,`Pratiquer la manipulation du DOM`, `Créer un projet` ];

for (const element of todoList) {
    const li = document.createElement(`li`);
    li.textContent = element;
    ul.append(li);

}

container.append(ul);