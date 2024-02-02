export function criarElementoMenu() {
    const menuNavegacao = document.createElement('nav');
    menuNavegacao.classList.add('menu');
    menuNavegacao.innerHTML = `
        <img src="../../../public/assets/images/Logo-01.png" alt="Logo" />
        <ul>
            <li class="item-enabled"><a href="#">Home</a></li>
            <li class="item-desabled"><a href="#">Sobre</a></li>
            <li class="item-desabled"><a href="#">Experiências</a></li>
            <li class="item-desabled"><a href="#">Projetos</a></li>
            <li class="item-desabled"><a href="#">Educação</a></li>
            <li class="item-desabled"><a href="#">Contato</a></li>
        <ul>
    `;
    return menuNavegacao;
}
