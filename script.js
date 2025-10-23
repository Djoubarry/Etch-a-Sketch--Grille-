const body = document.querySelector('body')

const title = document.createElement("h1")
title.textContent = "==== Etch-A-Sketch ===="
body.appendChild(title)

const btnNew = document.createElement('button')
btnNew.textContent = "Nouvelle grille"
btnNew.classList.add("btnNew")
body.appendChild(btnNew)

const container = document.createElement('div')
container.classList.add("container")
body.appendChild(container);
