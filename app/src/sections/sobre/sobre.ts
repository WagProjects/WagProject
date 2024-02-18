export function criarElementoSobre(){
    const sectionSobre = document.createElement('section')
    const cardSobre = document.createElement('div')

    sectionSobre.classList.add('container__sobre')
    cardSobre.classList.add('card__sobre')
    
    sectionSobre.innerHTML = `
        <h1 class="titulo__secao">Sobre</h1>
    `
    
    cardSobre.innerHTML = `
            <aside>
                <img src="./public/assets/images/Ultima.jpg" alt="Perfil" id="foto__perfil" />
                <ul>
                    <li class="meu__nome">Wagner Oliveira</li>
                    <li><img src="./public/assets/images/Icon-cap.svg" alt="Icone de Cap de Formando" />Desenvolvedor Front-End</li>
                    <li><img src="./public/assets/images/Icon-email.svg" alt="Iconte de Email" /><a href="mailto:contato-wagneros@outlook.com">contato-wagneros@outlook.com</a></li>
                    <li><img src="./public/assets/images/Icon-whatsapp.svg" alt="Icone de Contato" /><a href="https://wa.me/5521992316655" target="_blank">+55 21 992316655</a></li>
                    <li><img id="icon__localiza" src="./public/assets/images/Icon-location-dot-solid.svg" alt="Icone de Localização" /><a href="https://wa.me/5521992316655" target="_blank">Rio de Janeiro, RJ - Brasil</a></li>
                </ul>
            </aside>
            <div class="content">
                <h1 align="center">Bem-vindo(a)</h1>
                <p>Sou formado em Análise e Desenvolvimento de sistemas, atuo como desenvolvedor front-end, este é meu portifólio!</p>
                <p>Algumas tecnologias que tenho atuado em meus projetos:</p>
                <ul class="content-tecnologias">
                    <li> HTML </li>
                    <li> CSS </li>
                    <li> JavaScript </li>
                    <li> TypeScript </li>
                    <li> React </li>
                    <li> React Native </li>
                    <li> GIT </li>
                    <li> Figma </li>
                </ul>
            </div>
        `
    sectionSobre.appendChild(cardSobre)
    return sectionSobre
}
