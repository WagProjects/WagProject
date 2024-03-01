export function criarElementoRodaPe(){
    const sectionFooter = document.createElement('footer')
    sectionFooter.classList.add('rodape')

    const cardFooter = document.createElement('section')
    cardFooter.classList.add('card__footer')

    cardFooter.innerHTML = `
        <span>
            <img src="./public/assets/images/Logo-Footer4.png" alt="Logo Footer"/>
        </span>
        <div>
            <ul>
                <li><a>Sobre mim</a></li>
                <li><a>Contato</a></li>
            </ul>
            <p>Wagner Oliveira</p>
            <p>2024 © Todos Direitos Reservados.</p>
        </div>
    `

    sectionFooter.appendChild(cardFooter)
    return sectionFooter
}