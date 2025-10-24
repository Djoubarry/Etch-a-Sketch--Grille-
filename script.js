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

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add("square")

        //La taille du carré
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`

        square.addEventListener("mouseover", () => {
            // Generation de couleur aléatoire
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        });

        container.appendChild(square)
    }
}

function resetGrid() {
    let newSize = parseInt(prompt("New size with (max 100): "));

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    size = newSize;
    createGrid(size);

}
btnNewGrille.addEventListener("click", resetGrid)

createGrid(size)

