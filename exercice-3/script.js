const bouton = document.getElementById(`deleteBtn`);

bouton.addEventListener("click", function () {
    const articlesListe = document.getElementById(`articles`);

    if (articlesListe && articlesListe.lastElementChild) {
        articlesListe.removeChild(articlesListe.lastElementChild);
    }
});
