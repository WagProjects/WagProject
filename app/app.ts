import { criarElementoMenu } from "./src/menu/menu.js"
import { criarElementoSaudacao } from "./src/home/home.js"


function criarElemento(elemento: HTMLElement){
    const container = document.querySelector("body") as HTMLBodyElement
    container.appendChild(elemento)
}

criarElemento(criarElementoMenu());
criarElemento(criarElementoSaudacao())