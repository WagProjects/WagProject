import { criarElementoMenu } from "./src/menu/menu.js";
import { criarContainerGeral, criarElementoSobre, criarElementoProjetos, criarElementoEducacao } from "./src/home/home.js";
function inserirElementoBody(elemento) {
    const menu = document.querySelector("body");
    menu.appendChild(elemento);
}
function inserirElementoNoContainerGeral(elemento) {
    const container = document.querySelector(".container__geral");
    container.appendChild(elemento);
}
inserirElementoBody(criarElementoMenu());
inserirElementoBody(criarContainerGeral());
inserirElementoNoContainerGeral(criarElementoSobre());
inserirElementoNoContainerGeral(criarElementoProjetos());
inserirElementoNoContainerGeral(criarElementoEducacao());
