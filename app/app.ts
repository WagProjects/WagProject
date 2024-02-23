import { criarElementoMenu } from "./src/sections/menu/menu.js"
import { criarContainerGeral} from "./src/main/main.js"
import { criarElementoPoster } from "./src/sections/poster/poster.js"
import { criarElementoSobre } from "./src/sections/sobre/sobre.js"
import { criarElementoProjetos } from "./src/sections/projetos/projetos.js"
import { criarElementoEducacao } from "./src/sections/educacao/educacao.js"
import { criarElementoContato } from "./src/sections/contato/contato.js"



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

inserirElementoNoContainerGeral(criarElementoPoster())
inserirElementoNoContainerGeral(criarElementoSobre())
inserirElementoNoContainerGeral(criarElementoProjetos())
inserirElementoNoContainerGeral(criarElementoEducacao())
inserirElementoNoContainerGeral(criarElementoContato())