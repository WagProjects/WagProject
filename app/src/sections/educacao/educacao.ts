export function criarElementoEducacao(){
    const sectionEducacao = document.createElement('section')
    sectionEducacao.classList.add('container__educacao')

    const cardEducacao = document.createElement('div')
    cardEducacao.classList.add('card__educacao')

    const tituloExtraEducacao = document.createElement('h1')
    tituloExtraEducacao.classList.add('titulo__secao', 'titulo__extra-educacao')

    const cardExtraEducacao = document.createElement('div')
    cardExtraEducacao.classList.add('card__extra-educacao')


    sectionEducacao.innerHTML = `
        <h1 class="titulo__secao">Educação</h1>
    `

    cardEducacao.innerHTML = `
        <ul class="nav__educacao">
            <li class="educacao__item-01">
                <div class="educacao__background">
                </div>
                <div class="educacao__content">
                    <h1>Superior de Tecnologia em Análise e Desenvolvimento de Sistemas</h1>
                    <p>2021-2023</p>
                </div>
            </li>
            <li class="educacao__item-02">
                <div class="educacao__background">
                </div>
                <div class="educacao__content">
                    <h1>Desenvolva Aplicações Web com Javascript</h1>
                    <span class="educacao__instituicao">
                        <p><a href="https://cursos.alura.com.br/user/contato-wagneros/degree-javascript-front-end-687029/certificate" target="_blank"><img src="./public/assets/images/Icon-link-solid.svg"/>Alura</a></p>
                        <p>2023</p>
                    </span>
                    <p>Formação: 8 cursos com carga horária estimada de 62 horas</p>
                </div>
            </li>
            <li class="educacao__item-03">
                <div class="educacao__background">
                </div>
                <div class="educacao__content">
                    <h1>Melhore Sua Experiência de Desenvolvimento com Typescript</h1>
                    <span class="educacao__instituicao">
                        <p><a href="https://cursos.alura.com.br/user/contato-wagneros/degree-typescript-v309729-309729/certificate" target="_blank"><img src="./public/assets/images/Icon-link-solid.svg"/>Alura</a></p>
                        <p>2023</p>
                    </span>
                    <p>Formação: 3 cursos com carga horária estimada em 31 horas.</p>
                </div>
            </li>
            <li class="educacao__item-04">
                <div class="educacao__background">
                </div>
                <div class="educacao__content">
                    <h1>Desenvolva Aplicações Web em Javascript com Tarefas Concorrentes e Orientadas a Objetos</h1>
                    <span class="educacao__instituicao">
                        <p><a href="https://cursos.alura.com.br/user/contato-wagneros/degree-typescript-v309729-309729/certificate" target="_blank"><img src="./public/assets/images/Icon-link-solid.svg"/>Alura</a></p>
                        <p>2023</p>
                    </span>
                    <p>Formação: 3 cursos com carga horária estimada em 23 horas.</p>
                </div>
            </li>
        </ul>
    `

    tituloExtraEducacao.innerHTML = `
        Extracurriculares
    `

    cardExtraEducacao.innerHTML = `
    <div class="swiper swiper2">
            <div class="swiper-wrapper swiper-wrapper2">
                <div class="swiper-slide swiper-slide2">Slide 1</div>
                <div class="swiper-slide swiper-slide2">Slide 3</div>
                <div class="swiper-slide swiper-slide2">
                    <img src="./public/assets/images/fokus.jpeg" />
                </div>
                <div class="swiper-slide swiper-slide2">
                    <img src="./public/assets/images/fokus.jpeg" />
                </div>
                <div class="swiper-slide swiper-slide2">
                    <img src="./public/assets/images/fokus.jpeg" />
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination swiper-pagination2"></div>
        </div>
        <div class="conteudo__extra-educacao">Teste</div>
    `

    sectionEducacao.appendChild(cardEducacao)
    sectionEducacao.appendChild(tituloExtraEducacao)
    sectionEducacao.appendChild(cardExtraEducacao)

    return sectionEducacao
}