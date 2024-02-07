export function criarContainerGeral(){
    const containerGeral = document.createElement('section')
    containerGeral.classList.add('container__geral')
    return containerGeral
}

export function criarElementoSaudacao(){
    const sectionSobre = document.createElement('section')
    const cardSobre = document.createElement('div')

    sectionSobre.classList.add('container__sobre')
    cardSobre.classList.add('card__sobre')
    
    sectionSobre.innerHTML = `
        <img src="" alt="sobre" id="imagem__sobre" />
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
                <p>Meu nome é Wagner, tenho 28 anos, formado em Análise e Desenvolvimento de Sistemas, amante de tecnologia, jogos e cultura geek.
                Acredito fortemente que a educação e o conhecimento tem o poder de trazer realizações incríveis na área de tecnologia e por isso procuro sempre me desenvolver em minha área de formação. Assim, venho trabalhando em projetos em meu portfólio com o objetivo de agregar conhecimento e estar preparado para os desafios cotidianos de uma equipe de desenvolvimento.</p>
                <p>Formação 👨‍🎓 ➡ Analise e Desenvolvimento de Sistemas.</p>
                <p>Hard Skill 🧠 ➡</p>
                <ul>
                    <li> JavaScript </li>
                    <li> HTML </li>
                    <li> CSS </li>
                    <li> GIT </li>
                    <li> TypeScript </li>
                    <li> React </li>
                    <li> React Native </li>
                </ul>
                <p>Soft Skill 🧠 ➡</p>
                <ul>
                    <li>Comunicação interpessoal </li>
                    <li>Proatividade </li>
                    <li>Resolução de conflitos </li>
                    <li>Capacidade de trabalhar sob pressão </li>
                    <li>Capacidade analítica </li>
                </ul>
            </div>
        `
    sectionSobre.appendChild(cardSobre)
    return sectionSobre
}