import { criarElementoMenu } from "./src/menu/menu.js"
import { criarElementoSaudacao, criarContainerGeral } from "./src/home/home.js"


function inserirElementoBody(elemento: HTMLElement){
    const menu = document.querySelector("body") as HTMLBodyElement
    menu.appendChild(elemento)
}


function inserirElementoNoContainerGeral(elemento: HTMLElement){
    const container = document.querySelector(".container__geral") as HTMLBodyElement
    container.appendChild(elemento)
}


inserirElementoBody(criarElementoMenu());
inserirElementoBody(criarContainerGeral())
inserirElementoNoContainerGeral(criarElementoSaudacao())