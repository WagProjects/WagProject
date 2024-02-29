export function criarElementoRodaPe() {
    const sectionFooter = document.createElement('footer');
    sectionFooter.classList.add('rodape');
    const cardFooter = document.createElement('section');
    cardFooter.classList.add('card__footer');
    cardFooter.innerHTML = `
        <span>
            <img src="./public/assets/images/Logo-02.png" alt="Logo Footer"/>
            <h1>agner Oliveira</h1>
        </span>
        <div>
            <ul>
                <li><a>Sobre mim</a></li>
                <li><a>Contato</a></li>
            </ul>
            <p>Wagner Oliveira | 2024 © Todos Direitos Reservados.</p>
        </div>
    `;
    sectionFooter.appendChild(cardFooter);
    return sectionFooter;
}
