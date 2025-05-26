let elements = [];
const bouton = document.querySelector(`#addItemBtn`);
const listeTexte = document.querySelector(`#liste`);

bouton.addEventListener("click", function () {
    const nouvelElement = `Elément ${elements.length + 1}`;
    elements.push(nouvelElement);

    elements.forEach(itemText => {
        const element = document.createElement(`p`);
        element.textContent = itemText;

        listeTexte.append(element);
    });
});

