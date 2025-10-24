const body = document.querySelector('body')

const title = document.createElement("h1")
title.textContent = "==== Etch-A-Sketch ===="
body.appendChild(title)

const btnNewGrille = document.createElement('button')
btnNewGrille.textContent = "Nouvelle grille"
btnNewGrille.classList.add("btnNewGrille")
body.appendChild(btnNewGrille)

const container = document.createElement('div')
container.classList.add("container")
body.appendChild(container);

let size = 16;

function createGrid () {
    container.innerHTML = "";

    const squareSize = 960 / size;

    for (i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add("square")

        square.style
    }
}


createGrid(size)

