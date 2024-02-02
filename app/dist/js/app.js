import { criarElementoMenu } from "./src/menu/menu.js";
import { criarElementoSaudacao } from "./src/home/home.js";
function criarElemento(elemento) {
    const container = document.querySelector("body");
    container.appendChild(elemento);
}
criarElemento(criarElementoMenu());
criarElemento(criarElementoSaudacao());
