export function criarElementoEducacao(){
    const sectionEducacao = document.createElement('section')
    sectionEducacao.classList.add('container__educacao')
    sectionEducacao.id = 'section4'

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
                        <p><a href="https://cursos.alura.com.br/user/contato-wagneros/degree-javascript-front-end-687029/certificate" target="_blank"><img src="./public/assets/images/icons/Icon-link-solid.svg"/>Alura</a></p>
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
                        <p><a href="https://cursos.alura.com.br/user/contato-wagneros/degree-typescript-v309729-309729/certificate" target="_blank"><img src="./public/assets/images/icons/Icon-link-solid.svg"/>Alura</a></p>
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
                        <p><a href="https://cursos.alura.com.br/user/contato-wagneros/degree-typescript-v309729-309729/certificate" target="_blank"><img src="./public/assets/images/icons/Icon-link-solid.svg"/>Alura</a></p>
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
            <div class="swiper-slide swiper-slide2">Slide 2</div>
            <div class="swiper-slide swiper-slide2">
                <img src="./public/assets/images/fokus.jpeg" />
            </div>
            <div class="swiper-slide swiper-slide2">
                <img src="./public/assets/images/fokus.jpeg" />
            </div>
            <div class="swiper-slide swiper-slide2">
                <img src="./public/assets/images/fokus.jpeg" />
            </div>
            <div class="swiper-slide swiper-slide2">Slide 6</div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination swiper-pagination2"></div>
    </div>
    <div class="conteudo__extra-educacao">
        <nav class="conteudo__extra-educacao-nav">
            <ul>
                <li class="conteudo-extra-item-01">Mais Recentes</li>
                <li class="conteudo-extra-item-02">Outros</li>
            </ul>
        </nav>
        <div class="conteudo__extra-educacao-conteudo-recente">
            <ul class="conteudo__extra-educacao-lista">
                <li>
                    <p class="lista-curso">Curso 1</p>
                    <p class="lista-data">12/12/2012</p>
                </li>
                <li>Conteudo 2</li>
                <li>Conteudo 3</li>
                <li>Conteudo 4</li>
                <li>Conteudo 5</li>
                <li>Conteudo 6</li>
            </ul>
        </div>
        <div class="conteudo__extra-educacao-conteudo-outro">
            <ul class="conteudo__extra-educacao-lista">
                <li>1 Conteudo</li>
                <li>2 Conteudo</li>
                <li>3 Conteudo</li>
                <li>4 Conteudo</li>
                <li>5 Conteudo</li>
                <li>6 Conteudo</li>
            </ul>
        </div>
    </div>
    `

    /*SCRIPT REFERENTE A TROCA DE SEÇÃO 'MAIS RECENTE' NO CONTEUDO EXTRACURRICULAR*/
    document.addEventListener('DOMContentLoaded', function () {
        var conteudoExtraItem1 = document.querySelector('.conteudo-extra-item-01');
        var conteudoExtraItem2 = document.querySelector('.conteudo-extra-item-02');
        var conteudoRecente = document.querySelector('.conteudo__extra-educacao-conteudo-recente');
        var conteudoOutro = document.querySelector('.conteudo__extra-educacao-conteudo-outro');

        if (conteudoExtraItem1) {
            conteudoExtraItem1.addEventListener('click', function() {
                if (conteudoRecente) {
                    // Mostrar 'Mais Recente' e ocultar conteúdo 'Outros'
                    (conteudoRecente as HTMLElement).style.display = 'block';
                    (conteudoOutro as HTMLElement).style.display = 'none';
                }

                // Adicionar classe "active" ao botão 'Mais Recentes'
                if(conteudoExtraItem1){
                    conteudoExtraItem1.classList.add('active');
                }
                
                // Remover classe "active" do outro botão
                if (conteudoExtraItem2) {
                    conteudoExtraItem2.classList.remove('active');
                }
            });
        }
        if (conteudoExtraItem2 && conteudoRecente && conteudoOutro) {
            conteudoExtraItem2.addEventListener('click', function () {
                if (conteudoOutro) {
                    // Mostrar conteúdo 'Outros' e ocultar 'Mais Recente'
                    (conteudoRecente as HTMLElement).style.display = 'none';
                    (conteudoOutro as HTMLElement).style.display = 'block';
                }

                // Adicionar classe "active" ao botão 'Outros'
                if(conteudoExtraItem2){
                    conteudoExtraItem2.classList.add('active');
                }

                // Remover classe "active" do outro botão 'Mais Recentes'
                if (conteudoExtraItem1) {
                    conteudoExtraItem1.classList.remove('active');
                }
            });
        }
    });
    
    sectionEducacao.appendChild(cardEducacao)
    sectionEducacao.appendChild(tituloExtraEducacao)
    sectionEducacao.appendChild(cardExtraEducacao)
    
    return sectionEducacao
}
