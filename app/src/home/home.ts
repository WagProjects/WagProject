export function criarElementoSaudacao(){
    const elementoSaudacao = document.createElement('section')
    elementoSaudacao.classList.add('saudacao__apresentacao')
    elementoSaudacao.innerHTML = `
            <h1>OLÁ MUNDO</h1>
        `
    return elementoSaudacao
}