export function criarElementoRodaPe(){
    const sectionFooter = document.createElement('footer')
    sectionFooter.classList.add('rodape')

    const cardFooter = document.createElement('div')
    cardFooter.classList.add('card__footer')

    sectionFooter.innerHTML = ``

    sectionFooter.appendChild(cardFooter)
    return sectionFooter
}